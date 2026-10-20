// Revisión local de archivos versionados; --history incluye los objetos del historial.
const fs = require('node:fs');
const {execFileSync} = require('node:child_process');
const git = (...args) => execFileSync('git', args, {maxBuffer:64*1024*1024});
const findings = [];
function inspect(label, data) {
 const text = data.toString('utf8');
 if (/\b[A-Z]:[\\/]Users[\\/]/i.test(text) || /\/Users\/[^\s/]+\//.test(text) || /\/home\/[^\s/]+\//.test(text)) findings.push(`${label}: ruta de carpeta personal`);
 const emails = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
 if (emails.some(email=>!/@(?:users\.noreply\.github\.com|github\.com|example\.(?:com|org|net))$/i.test(email))) findings.push(`${label}: correo ajeno a noreply o ejemplos`);
 if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text) || /\b(?:gh[pousr]_[a-zA-Z0-9]{30,}|github_pat_[a-zA-Z0-9_]{30,}|AKIA[A-Z0-9]{16})\b/.test(text)) findings.push(`${label}: posible credencial`);
}
const files = git('ls-files','-z').toString().split('\0').filter(Boolean);
for (const file of files) {
 if (/(?:^|\/)(?:\.env(?:\..+)?|\.npmrc|\.netrc|\.git-credentials)$|\.(?:pem|key|p12|pfx|bundle)$/i.test(file) && !file.endsWith('.env.example')) findings.push(`${file}: archivo privado versionado`);
 if (fs.existsSync(file)) inspect(file,fs.readFileSync(file));
}
if (process.argv.includes('--history')) {
 const ids = [...new Set(git('rev-list','--objects','--all').toString().trim().split('\n').filter(Boolean).map(line=>line.split(' ')[0]))];
 const buffer = execFileSync('git',['cat-file','--batch'],{input:ids.join('\n')+'\n',maxBuffer:64*1024*1024});
 let offset=0;
 for (let i=0;i<ids.length;i++) {
  const end=buffer.indexOf(10,offset);
  const [id,type,length]=buffer.subarray(offset,end).toString().split(' ');
  const size=Number(length);if(!Number.isFinite(size))throw new Error('No se pudo leer un objeto Git');
  offset=end+1;
  if(type==='blob'||type==='commit'||type==='tag')inspect(`${type} ${id.slice(0,8)}`,buffer.subarray(offset,offset+size));
  offset+=size+1;
 }
 console.log(`Revisados ${ids.length} objetos alcanzables del historial.`);
}
if(findings.length){console.error([...new Set(findings)].join('\n'));process.exitCode=1;}
else console.log(`Privacidad: ${files.length} archivos versionados sin coincidencias en las comprobaciones configuradas.`);
