"""Rebuild the complete, offline single HTML from the editable source files."""
from pathlib import Path
import base64,re
ROOT=Path(__file__).resolve().parent
html=(ROOT/'index.html').read_text()
css=(ROOT/'style.css').read_text()
for match in list(re.finditer(r'url\((assets/fonts/[^)]+)\)',css)):
    data=base64.b64encode((ROOT/match.group(1)).read_bytes()).decode()
    css=css.replace(match.group(0),'url(data:font/ttf;base64,'+data+')')
html=html.replace('<link rel="stylesheet" href="style.css">','<style>\n'+css+'\n</style>')
start=html.rindex('<script>');end=html.index('</script>',start)+len('</script>')
bootstrap="""window.kiteFatal=function(message){document.getElementById('loading').hidden=true;document.getElementById('failure').hidden=false;document.getElementById('errorText').textContent=message;};window.addEventListener('error',function(e){if(window.kiteReady&&typeof save==='function')save();kiteFatal('The adventure could not run. Please use a browser with WebGL enabled. '+e.message);});"""
scripts=['<script>'+bootstrap+'</script>']
for i,file in enumerate(['vendor/three.min.js','story.js','scene.js','main.js'],1):
    js=(ROOT/file).read_text().replace('</script','<\\/script')
    scripts.append('<script>\n'+js+'\n</script>')
    scripts.append(f'<script>document.getElementById("loadProgress").value={i};</script>')
html=html[:start]+'\n'.join(scripts)+html[end:]
(ROOT/'KITE-Final.html').write_text(html)
print('Created KITE-Final.html:',len(html.encode()),'bytes')
