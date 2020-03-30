export const boxShadows = size => {
  if (size === 'xsmall') {
    return `box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.15)`;
  } else if (size === 'small') {
    return `box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.35)`;
  } else if (size === 'medium') {
    return `box-shadow: 0 0.75rem 1.8rem rgba(0, 0, 0, 0.55)`;
  } else if (size === 'big') {
    return `box-shadow: 0 0.2rem 2.2rem rgba(0, 0, 0, 0.75)`;
  }
};

export const mediaQueries = breakpoint => {
  if (breakpoint === 'phone') {
    return `(min-width: 37.5em)`; //600px
  }
  if (breakpoint === 'tab-port') {
    return `(min-width: 56.25em)`; //900px
  }
  if (breakpoint === 'tab-land') {
    return `(min-width: 75em)`; //1200px
  }
  if (breakpoint === 'popup') {
    return `(min-width: 90.63em)`; //1450px
  }
  if (breakpoint === 'big-desktop') {
    return `(min-width: 112.5em)`; //1800px
  }
};

// export const mediaQueries = {
//   phone: '31.25em', // 600px
//   tabPort: '56.25em', // 900px
//   tabLand: '75em', // 1200px
//   popup: '90.63em', // 1450px
//   bigDesktop: '112.5em' // 1800px
// };
