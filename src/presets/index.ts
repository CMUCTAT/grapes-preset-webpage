import type { Block, Editor } from 'grapesjs';
import { TEMPLATE_1, TEMPLATE_2, TEMPLATE_SELECT_EVENT } from './templates';
import { THEME_1, THEME_2, THEME_SELECT_EVENT } from './themes';

export const PRESET_CATEGORIES = ['Templates', 'Themes'];

const templateIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6" fill-rule="evenodd"><path d="M26.875,26.875v118.25h118.25v-118.25zM37.625,37.625h96.75v26.875h-96.75zM37.625,75.25h43v59.125h-43zM91.375,75.25h43v59.125h-43z"></path></g></g></svg>`;

const themeIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b9a5a6" transform="scale(7.16667)"><path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path></g></g></svg>`;

const closePresets = (editor: Editor) =>
  editor.Panels.getButton('oba-toggle', 'presets-override')?.set('active', false);

export default (editor: Editor) => {
  const addPresetBlock = (id: string, def: Record<string, unknown>) => {
    editor.Blocks.add(id, def as never);
  };

  addPresetBlock('preset-template-1', {
    label: TEMPLATE_1.label,
    category: PRESET_CATEGORIES[0],
    content: '',
    disable: true,
    attributes: {
      title: `Add ${TEMPLATE_1.label}`,
      style: 'cursor:pointer',
    },
    render: ({ model, className }: { model: Block; className: string }) => `<div class="${className}__my-wrap">
    <div>
    ${templateIcon}
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
    onClick: (_block: unknown, currentEditor: Editor) => {
      currentEditor.trigger(TEMPLATE_SELECT_EVENT, TEMPLATE_1);
      closePresets(currentEditor);
    },
  });

  addPresetBlock('preset-template-2', {
    label: TEMPLATE_2.label,
    category: PRESET_CATEGORIES[0],
    content: '',
    disable: true,
    attributes: {
      title: `Add ${TEMPLATE_2.label}`,
      style: 'cursor:pointer',
    },
    render: ({ model, className }: { model: Block; className: string }) => `<div class="${className}__my-wrap">
    <div>
    ${templateIcon}
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
    onClick: (_block: unknown, currentEditor: Editor) => {
      currentEditor.trigger(TEMPLATE_SELECT_EVENT, TEMPLATE_2);
      closePresets(currentEditor);
    },
  });

  addPresetBlock('preset-theme-1', {
    label: THEME_1.label,
    category: PRESET_CATEGORIES[1],
    content: '',
    disable: true,
    attributes: {
      title: `Apply ${THEME_1.label}`,
      style: 'cursor:pointer',
    },
    render: ({ model, className }: { model: Block; className: string }) => `<div class="${className}__my-wrap">
    <div>
    ${themeIcon}
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
    onClick: (_block: unknown, currentEditor: Editor) => {
      currentEditor.trigger(THEME_SELECT_EVENT, THEME_1);
      closePresets(currentEditor);
    },
  });

  addPresetBlock('preset-theme-2', {
    label: THEME_2.label,
    category: PRESET_CATEGORIES[1],
    content: '',
    disable: true,
    attributes: {
      title: `Apply ${THEME_2.label}`,
      style: 'cursor:pointer',
    },
    render: ({ model, className }: { model: Block; className: string }) => `<div class="${className}__my-wrap">
    <div>
    ${themeIcon}
    <div class="gjs-block-label">${model.get('label')}</div>
    </div>
  </div>`,
    onClick: (_block: unknown, currentEditor: Editor) => {
      currentEditor.trigger(THEME_SELECT_EVENT, THEME_2);
      closePresets(currentEditor);
    },
  });
};
