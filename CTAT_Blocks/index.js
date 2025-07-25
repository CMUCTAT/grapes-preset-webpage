import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {},
      // default options
    },
    ...opts
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);


  editor.on('selector:add', selector => {
    selector.set({
      active: false, 
    });
  });
  editor.on('load', something => {

    editor.Panels.getButton('options', 'sw-visibility').set('active', 1);

    const drag = {
      run(editor, sender) {
        editor.setDragMode('absolute');

        if (sender && sender.set && sender.get) {
          sender.set('active', true);
        }
      },
      stop(editor, sender) {
        editor.setDragMode('');

        if (sender && sender.set && sender.get) {
          sender.set('active', false);
        }
      }
    };

    editor.Commands.add('dragCommand', drag);

    editor.on('undo', arg => {
      if (editor.Panels.getButton('options', 'dragModeButton')._previousAttributes.active == true) {
        editor.Panels.getButton("options", "dragModeButton").set('active', 1);
      }
    })

    const preview = {
      run(editor, sender) {
        
        const scriptEl = document.createElement('script');
        const previewFrame = editor.Canvas.addFrame({
          name: 'PreviewFrame',
          id: 'previewFrame',
          x: 0, // Position in canvas
          y: 0,
          width: '100%', // Frame dimensions
          height: "100%",
          });       
          
          const flashVars = {
            mode: 'auth',
            remoteSocketPort: 20080,
            remoteSocketSecurePort: 20443,
            session_id: "id",
            editorMode: true,
            CTATTarget: 'AUTHORING',
            tutoring_service_communication: "postMessage"
          };

          document.getElementsByTagName('iframe')[1].setAttribute('data-params', JSON.stringify(flashVars));
          const doc = document.getElementsByTagName('iframe')[1].contentWindow.document;
          const html = editor.getHtml();
          const css  =editor.getCss();
          const htmlString = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link href="https://cdn.ctat.cs.cmu.edu/releases/lab/CTAT.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.ctat.cs.cmu.edu/releases/lab/html-editor-default.css /">
    <script type="text/javascript" src="https://cdn.ctat.cs.cmu.edu/releases/lab/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.ctat.cs.cmu.edu/releases/lab/jquery-ui.min.js"></script>
    <script type="text/javascript" src="https://cdn.ctat.cs.cmu.edu/releases/lab/nools.js"></script>
    <script type="text/javascript" src="https://cdn.ctat.cs.cmu.edu/releases/lab/ctat.min.js"></script>
    <script type="text/javascript" src="https://cdn.ctat.cs.cmu.edu/releases/lab/ctatloader.js"></script>
  </head>
  <body>${html}</body>
    <style>${css}</style>
<html>`;

          doc.open();
          //replace this with other methods that was used in the preview code
          doc.write(htmlString);
          doc.close();

        //scriptEl.src = './src/ctatjslib/ctatloader.js';
        //doc.head.appendChild(scriptEl);
          
        editor.Panels.getButton('options', 'previewButton').attributes.label =  `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="17" height="17"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d97aa6"><path d="M32.25,16.125v139.75h29.83545c-2.2145,-2.52088 -3.50156,-4.30277 -3.70581,-4.58765l-4.3147,-6.16235h-11.06494v-118.25h53.75v32.25h32.25v49.29883c3.784,0.60737 7.36912,1.48552 10.75,2.60352v-59.50293l-35.39942,-35.39941zM107.5,34.47559l13.89942,13.89941h-13.89942zM118.25,118.25c-32.25,0 -51.0625,26.875 -51.0625,26.875c0,0 18.8125,26.875 51.0625,26.875c32.25,0 51.0625,-26.875 51.0625,-26.875c0,0 -18.8125,-26.875 -51.0625,-26.875zM118.25,129c17.0925,0 29.89617,9.5245 36.71167,16.125c-6.82625,6.60587 -19.62992,16.125 -36.71167,16.125c-17.0925,0 -29.89617,-9.5245 -36.71167,-16.125c6.82625,-6.60587 19.62992,-16.125 36.71167,-16.125zM118.25,129c-8.90637,0 -16.125,7.21863 -16.125,16.125c0,8.90637 7.21863,16.125 16.125,16.125c8.90637,0 16.125,-7.21863 16.125,-16.125c0,-1.63938 -0.31486,-3.18813 -0.76636,-4.67163c-1.28463,2.752 -4.06039,4.67163 -7.29614,4.67163c-4.4505,0 -8.0625,-3.612 -8.0625,-8.0625c0,-3.23575 1.91963,-6.01152 4.67163,-7.29614c-1.4835,-0.4515 -3.03226,-0.76636 -4.67163,-0.76636z"></path></g></g></svg>`
        },
      stop(editor, sender) {
        const head = editor.Canvas.getDocument().head;
        //head.removeChild(head.childNodes[head.length-1]);
        editor.Panels.getButton('options', 'previewButton').attributes.label = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="17" height="17"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6"><path d="M32.25,16.125v139.75h29.83545c-2.2145,-2.52088 -3.50156,-4.30277 -3.70581,-4.58765l-4.3147,-6.16235h-11.06494v-118.25h53.75v32.25h32.25v49.29883c3.784,0.60737 7.36912,1.48552 10.75,2.60352v-59.50293l-35.39942,-35.39941zM107.5,34.47559l13.89942,13.89941h-13.89942zM118.25,118.25c-32.25,0 -51.0625,26.875 -51.0625,26.875c0,0 18.8125,26.875 51.0625,26.875c32.25,0 51.0625,-26.875 51.0625,-26.875c0,0 -18.8125,-26.875 -51.0625,-26.875zM118.25,129c17.0925,0 29.89617,9.5245 36.71167,16.125c-6.82625,6.60587 -19.62992,16.125 -36.71167,16.125c-17.0925,0 -29.89617,-9.5245 -36.71167,-16.125c6.82625,-6.60587 19.62992,-16.125 36.71167,-16.125zM118.25,129c-8.90637,0 -16.125,7.21863 -16.125,16.125c0,8.90637 7.21863,16.125 16.125,16.125c8.90637,0 16.125,-7.21863 16.125,-16.125c0,-1.63938 -0.31486,-3.18813 -0.76636,-4.67163c-1.28463,2.752 -4.06039,4.67163 -7.29614,4.67163c-4.4505,0 -8.0625,-3.612 -8.0625,-8.0625c0,-3.23575 1.91963,-6.01152 4.67163,-7.29614c-1.4835,-0.4515 -3.03226,-0.76636 -4.67163,-0.76636z"></path></g></g></svg>`      }
    };

    editor.Commands.add('previewCommand', preview);
    
    const upload = {
      run(editor, sender) {
        const panels = editor.Panels.getPanelsEl();
        const HTMLfileInput = document.getElementsByClassName("HTMLfileInput")[0];          
        function handleFiles() {
          const fileList = this.files;
          while (editor.Canvas.getDocument().getElementById('wrapper').firstChild){
            editor.Canvas.getDocument().getElementById('wrapper').removeChild(editor.Canvas.getDocument().getElementById('wrapper').firstChild);
          };
          let promise = fileList[0].text()
          promise.then(text => {editor.setComponents(text)});
          Promise.all([promise])
        };
        HTMLfileInput.addEventListener("change", handleFiles, false);
        HTMLfileInput.click();
        
        const CSSfileInput = document.getElementsByClassName("CSSfileInput")[0];          
        function handleFiles() {
          const fileList = this.files;
          let promise = fileList[0].text()
          promise.then(text => {editor.addComponents(`<style> ${text} </style>`)});
          Promise.all([promise])
        };
        CSSfileInput.addEventListener("change", handleFiles, false);
        CSSfileInput.click();
             }
    };

    const retrieve_path = {
      run(editor, sender) {
        const xhr_upload = new XMLHttpRequest();
        xhr_upload.open('POST', 'http://localhost:10999/chooseFile');
        xhr_upload.send();
        // Path chose in the CTAT window is parsed into a string here
        xhr_upload.onload  = function(){
          const upload_path = JSON.parse(xhr_upload.response).path;
          var xhr_write=new XMLHttpRequest();
          var new_upload_path = upload_path.replace(/\\/g , '/');
          xhr_write.open('POST', 'http://localhost:10999/writeFile?path='+new_upload_path);
          xhr_write.send();
          xhr_write.onload  = function(){
          editor.StorageManager.getConfig().urlStore ='http://localhost:10999/writeFile?path=/'+new_upload_path;
          editor.StorageManager.getConfig().urlLoad ='http://localhost:10999/writeFile?path=/'+new_upload_path;
          }
        }
             }
    };

    editor.Commands.add('uploadCommand', upload);

    editor.Panels.addButton('options', {
      id: 'uploadButton',
      className: 'fa fa-upload',
      command: 'uploadCommand',
      attributes: { 'data-tippy-content': 'Upload HTML with CSS' }
    });

    editor.Panels.removeButton('options',"gjs-open-import-webpage"); 
    
    editor.Panels.addButton('options', {
      id: 'dragModeButton',
      label: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="17" height="17">
        <g><g><path d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58
            c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240
            c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z"/></g></g>
        <g><g><path d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085
            C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z" /></g></g>
        </svg>`,
      command: 'dragCommand',
      attributes: { 'data-tippy-content': 'Absolute Position Drag Mode' }
    });

    editor.Panels.addButton('options', {
      id: 'tutorialButton',
      className: 'fa fa-question-circle',
      attributes: { 'data-tippy-content': 'Start Tutorial' }
    });

  });
}
