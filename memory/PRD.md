# Ishan H D Portfolio

## Original problem statement
Build a complete, production-quality personal portfolio website for Ishan H D, a BCA AI & ML student at Vivekananda College, Puttur. The website must feel like a modern AI/developer portfolio blended with creative personal branding and editorial minimalism. It must use the supplied black-and-gold hero artwork, orange as the only UI accent, responsive sections, smooth interactions, accessible controls, editable content, a projects-in-progress empty state, and a frontend-validated contact form.

## Architecture decisions
- React single-page experience with reusable data-driven section patterns in `frontend/src/App.js`.
- CSS design system in `frontend/src/App.css` using black, warm cream, and orange; Google Fonts provide expressive serif/sans typography.
- Supplied assets are referenced as public asset URLs: hero artwork for the hero and portrait for About.
- No backend integration is required for the current contact flow; the form validates in-browser and shows a success state.

## Implemented
- Responsive fixed navbar with scroll treatment, section navigation, mobile menu, and Escape-to-close behavior.
- Hero, About, Skills, Projects-in-progress, Education timeline, Certifications placeholders, Services, Contact, and Footer.
- Supplied hero artwork integrated as the complete visual centerpiece without recoloring it.
- Editable content structures for skills, services, navigation, social links, and contact details.
- Contact form required/email validation, clear success state, and direct email/social links.
- Reveal animations, hover states, reduced-motion support, focusable controls, semantic labels, and unique test IDs.

## Prioritized backlog
- P0: Keep current single-page portfolio stable and replace editable copy as personal details evolve.
- P1: Add real project data and project detail links once published work exists.
- P1: Add verified certifications and achievement entries as they are earned.
- P2: Connect the contact form to a preferred email workflow if message delivery is later needed.

## Next tasks
- Replace certification placeholders with real credentials.
- Add first published project cards with screenshots and links.
- Update the education timeline dates and any internship details.