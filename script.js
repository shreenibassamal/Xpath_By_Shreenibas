 // dynamic ids
    const rand = Math.floor(Math.random() * 100000);
    const dyn = document.getElementById('dyn-input');
    dyn.id = 'user_' + rand + '_input';

    // generate some dynamic options (react-select like)
    const container = document.getElementById('dynamic-container');
    const selectDiv = document.createElement('div');
    selectDiv.id = 'react-select-' + rand + '-input';
    selectDiv.setAttribute('role', 'combobox');
    selectDiv.className = 'panel';
    selectDiv.textContent = 'Dynamic combobox #' + rand;
    container.appendChild(selectDiv);

    // modal open/close wiring
    const dlg = document.getElementById('confirmDialog');
    const backdrop = document.getElementById('backdrop');
    document.getElementById('openModalBtn').addEventListener('click', () => { dlg.showModal(); backdrop.style.display='flex'; });
    document.getElementById('cancelDel').addEventListener('click', () => { dlg.close(); backdrop.style.display='none'; });
    document.getElementById('deleteBtn').addEventListener('click', () => { alert('Deleted'); dlg.close(); backdrop.style.display='none'; });

    // simple status updates for screen readers
    const status = document.getElementById('sr-status');
    document.getElementById('search-btn').addEventListener('click', () => { status.textContent = 'Search triggered at ' + new Date().toLocaleTimeString(); });

    // Shadow DOM custom element
    class ShadowHost extends HTMLElement {
      constructor(){ super(); const root = this.attachShadow({mode:'open'});
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
          <style>
            .card { border: 1px solid #2b3b61; padding: 10px; border-radius: 12px; background:#0f1728; color:#e9edf6 }
            .name { font-weight: 700; }
          </style>
          <div class="card">
            <div class="name">Shadow User</div>
            <label>Secret Field</label>
            <input id="shadowInput" placeholder="inside shadow" />
            <button id="shadowBtn">Save</button>
          </div>`;
        root.appendChild(wrapper);
      }
    }
    customElements.define('shadow-host', ShadowHost);