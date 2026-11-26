# DusD Works

The studio homepage for [DusD Works](https://dusd24.github.io/dusd-works/), featuring Cluckworks (iPhone and iPad beta, Fire tablets, and a desktop edition in development) and the browser builds of IdleCombat and Dangolf. Open `index.html` or use a local static server for preview. Use HTTP to preview the trailer with its caption track.

Game entries live in `index.html`. Add prototypes to the In development section, and store links to the Get Cluckworks section. The included trailer is a web encode of the approved landscape v03 edit. The Cluckworks privacy policy lives at `cluckworks/privacy/` and is the URL the app stores use, so keep it in step with `docs/privacy/` in the Cluckworks repo. The old Cluckworks Pages site (browser play and the Fire APK) went down when that repo went private, so don't link it.

## Publish after preview approval

1. Create the public `DusD24/dusd-works` repository and push the reviewed `main` branch.
2. In **Settings → Pages**, choose **Deploy from a branch → main → /(root)** and enforce HTTPS. Check the resulting project URL, the trailer and captions, the support link, the social preview image, and the four Cluckworks URLs. Play and reload in a separate browser profile to check game saves without touching an existing farm.
3. In [Search Console](https://search.google.com/search-console), add `https://dusd24.github.io/dusd-works/` as a URL-prefix property. Commit the downloaded HTML verification file unchanged at the repository root, confirm it is public, and keep it deployed. Verify ownership, then run URL Inspection and request indexing.
4. In [Play Console](https://play.google.com/console), save the same URL under **Account details** and send the verification request if the account offers it. If the Search Console owner uses a different Google account, approve the request in **Search Console → Settings → Associations**. Confirm completion in Play Console. The website and support fields under **Store settings → Store listing contact details** are separate from account verification. Keep the existing Cluckworks app privacy URL.
5. Add store links only after confirming the direct listings while signed out.

If a custom domain is selected later, attach it to the studio project's Pages settings, update the canonical and social metadata, and reverify the address with Google. Test the old studio URL and the existing game URLs before updating developer profiles.
