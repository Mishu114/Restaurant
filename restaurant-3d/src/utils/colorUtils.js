export const interpolateColor = (color1, color2, progress) => {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  
  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export const interpolateColors = (colors1, colors2, progress) => {
  return {
    from: interpolateColor(colors1.from, colors2.from, progress),
    to: interpolateColor(colors1.to, colors2.to, progress)
  };
};

// Get background color for each section
export const getSectionBgColor = (section) => {
  const colors = {
    intro: { from: '#1e293b', to: '#475569' },
    offers: { from: '#334155', to: '#64748b' },
    about: { from: '#0f766e', to: '#115e59' },
    pizza: { from: '#ea580c', to: '#dc2626' },
    burger: { from: '#b45309', to: '#c2410c' },
    dessert: { from: '#ec4899', to: '#a855f7' },
    contact: { from: '#0f172a', to: '#1e293b' }
  };
  
  return colors[section] || colors.intro;
};
