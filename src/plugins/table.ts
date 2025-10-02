import type { Editor, BlockProperties } from 'grapesjs';

export default function(editor: Editor, opts={}) {
// category: 'Basic'
const bm = editor.BlockManager;

 bm.add('table', {
    category: 'Basic',
    select: true,
    label: 'table',
    media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
    content: `<table style="width: 100%;" border=1 cellspacing=0 cellpadding=0 align=left>
            <thead>
                <tr>
                    <th style="height: 24px"></th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style="height: 24px"></td>
                </tr>
            </tbody>
        </table>`
    }); 
}