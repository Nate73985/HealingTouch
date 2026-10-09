# Future deployment — approval required

Nothing has been pushed or deployed. The existing WordPress site has not been accessed administratively or modified.

1. Review the local website and resolve CONTENT.md approval items.
2. Create a GitHub repository only after authorization.
3. Initialize Git if needed and review staged files.
4. Commit and add the approved remote.
5. Push main only after authorization.
6. In Settings → Pages, select GitHub Actions.
7. Run the prepared manual workflow from Actions. It checks, builds and deploys static dist using native Pages permissions; no manually stored deployment secret is needed.
8. Verify the actual published URL, asset loading, routes, phone/email links and directions.
9. After separate approval, add the verified Premium URL to the existing site’s Premium button. That WordPress change is outside this phase.

Future commands (not executed):

```powershell
git init
git branch -M main
git add .
git commit -m "Build Healing Touch DPC Premium"
git remote add origin https://github.com/OWNER/HealingTouch.git
git push -u origin main
```

Replace OWNER with the approved account. The workflow uses the actual repository name for `/REPOSITORY/` asset base. Locally VITE_BASE_PATH defaults to `/`. Validate a repository build with `$env:VITE_BASE_PATH='/HealingTouch/'` then `npm run build`. HashRouter supports paths such as `/HealingTouch/#/memberships` without a server fallback. Keep asset() for public paths; avoid root-hardcoded image URLs.

## SEO

Page titles/descriptions update per route. Static social crawlers see index.html metadata. Hash routes are a deliberate static-hosting tradeoff: they are not distinct indexable pages. Use a sitemap containing the approved root URL, not invented hash-route URLs. After origin approval set canonicalOrigin in site.ts, the static canonical/og:url in index.html, a real social preview and a Sitemap directive in robots.txt. Structured data is intentionally omitted until the owner approves production identity and URL; never include fabricated ratings. If individual page search indexing is critical, prerender separate static paths in a future phase.

## Optional custom domain

After authorization, configure premium.healingtouchdpc.com in repository Pages settings, set the DNS CNAME to the approved account’s Pages hostname, and follow GitHub domain verification instructions. Switch the build base to `/`, enable HTTPS after DNS validation and update canonical/social/sitemap URLs. Do not configure DNS or add a CNAME now.

Official workflow reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages . The workflow is manual-only so a future source push will not deploy automatically.
