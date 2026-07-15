- [x] Refactor `src/app/blog/page.jsx` to use real blog data from `src/lib/mockContent.js`, fix layout spacing (no navbar overlap), and implement working "Read more" navigation to `/blog/[slug]`.
- [x] Rewrite `src/app/blog/components/LatestBlog.jsx` into a clean reusable component (imports framer-motion, defines variants, uses correct props, and renders cards with working "Read more" buttons).
- [x] Fix `src/app/blog/[slug]/page.jsx` to import from the correct data source (`src/lib/mockContent.js`) and ensure it renders full related content.
- [ ] Run dev server/build to verify routes: `/blog` list + `/blog/[slug]` detail.


