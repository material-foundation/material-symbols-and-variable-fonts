import{r as p,s as d,$ as l,n as c}from"./vendor.8226bdf7.js";const v=p`
  .actions {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: var(--padding);
    right: var(--padding);
  }
  .actions :last-child {
    margin-left: var(--padding);
  }
`;var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,g=(a,t,n,r)=>{for(var o=r>1?void 0:r?f(t,n):t,e=a.length-1,s;e>=0;e--)(s=a[e])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&x(t,n,o),o};let i=class extends d{render(){return l`<button>
      <span>Next</span>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 0.5L7.09 1.91L12.67 7.5H0.5V9.5H12.67L7.09 15.09L8.5 16.5L16.5 8.5L8.5 0.5Z"
          fill="var(--md-sys-color-on-secondary-container)"
        />
      </svg>
    </button>`}};i.styles=p`
    button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;

      position: static;
      height: 48px;
      left: 0px;
      top: 0px;

      background-color: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
      border-radius: 100px;

      flex: none;
      order: 2;
      flex-grow: 0;

      border: none;
      cursor: pointer;
    }

    button :first-child {
      padding-right: 16px;
    }

    button:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  `;i=g([c("next-button")],i);export{v as b};
