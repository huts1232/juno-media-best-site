# MOTION.md

Bron: Webflow IX2 payload uit `.reference/home.html` of, zoals in deze export, uit de gedownloade Webflow JS-bundle; `data-w-id` in de HTML koppelt targets aan de events/actionLists hieronder.

Aantal events: 433
Aantal actionLists: 162

## Media queries uit IX2
| Key | Min | Max |
| --- | --- | --- |
| `main` | 992 | 10000 |
| `medium` | 768 | 991 |
| `small` | 480 | 767 |
| `tiny` | 0 | 479 |


## Easing mapping voor GSAP
| Webflow easing | GSAP |
| --- | --- |
| ease out / outQuad | `power2.out` |
| outQuart | `power4.out` |
| ease | `power1.inOut` |
| outExpo | `expo.out` |
| geen easing in continuous keyframes | `ease: "none"` met `scrub` |


## Trigger-overzicht
| Action list | Titel | Trigger types | Offsets | Media | Targets |
| --- | --- | --- | --- | --- | --- |
| `a-48` | `footer-social-hover` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .social-link-list-item` |
| `a-49` | `footer-social-hover out` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .social-link-list-item` |
| `a-46` | `btn-clutch` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6e\|7eed128a-0ef9-d5dc-b0ff-fdecac52bf62`<br>`id 667a7576e7e7ef3ba89b3f6d\|75385c40-b32b-66cc-3b59-e34b27bd812d` |
| `a-47` | `btn-clutch 2` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6e\|7eed128a-0ef9-d5dc-b0ff-fdecac52bf62`<br>`id 667a7576e7e7ef3ba89b3f6d\|75385c40-b32b-66cc-3b59-e34b27bd812d` |
| `a-165` | `cases-new 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|be24b132-7907-2a09-561b-a870a5aa1003` |
| `a-77` | `faq open close` | `DROPDOWN_CLOSE` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 0ed997cc-b698-2ae3-cf52-1d06f9a539c8`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539f8`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539d4`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a53994`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539ae`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a53988`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539e0`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539a0`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539ec`<br>`selector .faq-dropdown.dark`<br>`id 667d08f328f2df2d222670d1\|1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 66cd8dffcc885c1c3b20b8d3\|1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 66d064ef6b231df0c0e0f231\|1f714ca5-f5a4-7114-9551-240cb897faf8` |
| `a-76` | `faq open` | `DROPDOWN_OPEN` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 0ed997cc-b698-2ae3-cf52-1d06f9a539f8`<br>`selector .faq-dropdown.dark`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a53988`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539ae`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539e0`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539a0`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539ec`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539c8`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a539d4`<br>`id 0ed997cc-b698-2ae3-cf52-1d06f9a53994`<br>`id 667d08f328f2df2d222670d1\|1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 66cd8dffcc885c1c3b20b8d3\|1f714ca5-f5a4-7114-9551-240cb897faf8`<br>`id 66d064ef6b231df0c0e0f231\|1f714ca5-f5a4-7114-9551-240cb897faf8` |
| `a-83` | `about-3 new` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667a7576e7e7ef3ba89b3f6a\|72de45cf-e4d9-e5e2-2d5f-cf6a3744e38b` |
| `a-122` | `hero-scroll-july vsr-2 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|8579ced5-bb5c-a59c-9a98-4b378ead2465` |
| `a-42` | `service-card-brand-hover` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|37e11e59-ebd5-d47b-ea9d-28ff32111258` |
| `a-95` | `service-card-1 lottie-loop` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|9327c432-eee2-0657-eb01-f570952c3b22` |
| `a-96` | `service-card-2 lottie-loop` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|84e57622-0b7e-ccf4-d7c3-afac8d8200e3` |
| `a-97` | `service-card-3 lottie-loop` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|90c825d6-8459-ea93-9b52-82b0890cdb45` |
| `a-98` | `service-card-4 lottie` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|336f199c-c4b5-e579-bb2b-45693c0d9886` |
| `a-99` | `service-card-6-lottie` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|eff56ce8-5a94-9411-61c5-ecb0aaa91946` |
| `a-100` | `home-serv-heading` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|f4d214d0-6c36-9360-e2b5-d9bf4dbbc7ac` |
| `a-112` | `serv-heading shadow` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f68\|98032b54-2b53-4f65-5beb-c9c692498407`<br>`id 667a7576e7e7ef3ba89b3f68\|52978769-3c0a-2d4e-8056-bd518924caa3`<br>`id 667a7576e7e7ef3ba89b3f68\|03f2003e-b2be-b660-fdc9-639e0bf564f3`<br>`id 667a7576e7e7ef3ba89b3f68\|ccb4888d-f0e5-1e1a-a5b1-256f7c1efd19` |
| `a-113` | `Stats Cards View 2` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 10, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id f515b4c4-2fcd-4d20-0746-26efdc8bb300`<br>`id 667a7576e7e7ef3ba89b3f68\|2f4498e5-1c2a-9001-5e46-2389b7a620e5` |
| `a-117` | `home-second` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|bb32a1b6-2396-a007-5780-aa517848547a` |
| `a-125` | `secondary btn hover` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .btn-secondary` |
| `a-126` | `secondary btn hover 2` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .btn-secondary` |
| `a-127` | `cta-scroll` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 505a594f-6be9-46a4-c000-a940fb77655c` |
| `a-129` | `loopgradient` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .stats-card-wrapper` |
| `a-133` | `heading-shadow 4` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|21e6ff8c-2434-0b5b-a445-356906aeb701` |
| `a-132` | `heading-shadow 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|e8b85403-f394-d269-3ea7-1668de36b09d` |
| `a-131` | `heading-shadow 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 0ed997cc-b698-2ae3-cf52-1d06f9a53974` |
| `a-134` | `cta-border-rotate` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 87fb7b75-2f9f-4817-13e4-566ea0f8bfae`<br>`selector .card-glow` |
| `a-155` | `cta-border-rotate 2` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .case-item-wrap` |
| `a-138` | `mob-menu open` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id d854c265-bf21-cd91-d958-4207ee115060` |
| `a-139` | `mob-menu close` | `MOUSE_SECOND_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id d854c265-bf21-cd91-d958-4207ee115060`<br>`id cbc27156-e35e-4c75-5220-d918b1e3d19a` |
| `a-147` | `scroll view-services-mob` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|f4d214d0-6c36-9360-e2b5-d9bf4dbbc7ac` |
| `a-148` | `scroll view-services-mob 2` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 30, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c698` |
| `a-152` | `scroll view-services-mob 6` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|21e6ff8c-2434-0b5b-a445-356906aeb701` |
| `a-150` | `scroll view-services-mob 4` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|e8b85403-f394-d269-3ea7-1668de36b09d` |
| `a-151` | `scroll view-services-mob 5` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 0ed997cc-b698-2ae3-cf52-1d06f9a53974` |
| `a-153` | `hero-about` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 667a7576e7e7ef3ba89b3f6a\|a7cd9684-7712-b1ab-07ca-88ee417690b6` |
| `a-158` | `mob-menu open white` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id cbc27156-e35e-4c75-5220-d918b1e3d19a` |
| `a-177` | `Stats Cards View 3` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 10, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f68\|30e718eb-6422-0827-e2d5-89d4e9678760` |
| `a-159` | `solutionmob` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f68\|1ffe62eb-c31d-f6e4-7d34-6b51315eec98` |
| `a-157` | `solution` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667a7576e7e7ef3ba89b3f68\|1ffe62eb-c31d-f6e4-7d34-6b51315eec98` |
| `a-167` | `about-6` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667a7576e7e7ef3ba89b3f6a\|68aca963-cbdb-f57e-95d9-d192b9868ab2` |
| `a-163` | `;paly` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: 141, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 335a1b7a-c392-2315-8be8-c943ebafd459` |
| `a-164` | `;paly 2` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 335a1b7a-c392-2315-8be8-c943ebafd459` |
| `a-161` | `stat-intoview` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`<br>`scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|4b054b29-5f21-0fe5-b671-0a3519eadfed`<br>`id 667a7576e7e7ef3ba89b3f6a\|c25a901b-23a9-6216-5956-fb7a8deb8c27`<br>`id 667a7576e7e7ef3ba89b3f6a\|6c1ce564-d003-6602-345a-a768f1e4a425` |
| `a-168` | `tag-border` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|6d1332f8-3212-0ba2-8e33-ec01b8e03f28` |
| `a-169` | `Footer Link Hover In` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main` | `selector .footer-link` |
| `a-170` | `Footer Link Hover Out` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main` | `selector .footer-link` |
| `a-171` | `New Scroll Animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667d08f328f2df2d222670d1\|2a8753b8-3b85-8b9c-c07b-1f7ef622e640` |
| `a-172` | `about-3 new mob` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|72de45cf-e4d9-e5e2-2d5f-cf6a3744e38b` |
| `a-173` | `home-2mob` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|bb32a1b6-2396-a007-5780-aa517848547a` |
| `a-174` | `home-2mob 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|5c847b91-7380-fef8-2822-e0566817e79b` |
| `a-175` | `line` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 667a7576e7e7ef3ba89b3f6a\|c607c920-bd31-ea66-2ef1-a977c573326e` |
| `a-185` | `animation_design_elements_1440` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78188` |
| `a-201` | `Devices scroll desktop` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781b2` |
| `a-198` | `faq open 2` | `DROPDOWN_OPEN` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784a0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7877a`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784e0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78973`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789b3`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789c7`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7878e`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784ea`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789d1`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787b0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78991`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784fe`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78987`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78496`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787d8`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784d6`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784aa`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787ba`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787ce`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787a4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789bd`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787c4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789a9`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787e2`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7897d`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784c0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7899d`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78784`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78798`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784cc`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784b4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784f4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789db` |
| `a-191` | `brand_elements_move` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78634` |
| `a-199` | `dashboard_white` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7816f` |
| `a-206` | `faq open close 2` | `DROPDOWN_CLOSE` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7877a`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784cc`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789b3`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78973`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789d1`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789a9`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789c7`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784fe`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787c4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784d6`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787b0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78798`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784e0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784c0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7897d`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787a4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787d8`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789db`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787e2`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784b4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c789bd`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78784`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78987`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784f4`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787ba`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784aa`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c787ce`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78496`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7899d`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784a0`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7878e`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78991`<br>`id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c784ea` |
| `a-202` | `🔵 Brands Scroll 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c786d1` |
| `a-212` | `mobile_day_night` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78871`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319a38`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763eb8` |
| `a-183` | `mobile_json_comp` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7888a`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319a51`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763ed1` |
| `a-216` | `effect_slide` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781cc` |
| `a-192` | `New_scroll_up 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78801` |
| `a-213` | `New Scroll Animation 4` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78255` |
| `a-188` | `bg_black_our_works` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78333` |
| `a-194` | `dashboard_black` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78180` |
| `a-189` | `New Scroll Animation 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78864` |
| `a-200` | `open_popup` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7884c`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319a13`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763e93` |
| `a-214` | `json_dev_writ` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7882e` |
| `a-208` | `mobile_scroll_animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c782d3` |
| `a-217` | `вфырищфкв` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78186`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31934d`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917bb` |
| `a-204` | `Position_second_line_1440` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7819a` |
| `a-209` | `Devices scroll phone` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781b2` |
| `a-210` | `New Scroll Animation 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78612` |
| `a-193` | `animation_text_opacity` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781ff` |
| `a-197` | `animation_text_opacity 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781ff` |
| `a-196` | `second_line_animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7817f` |
| `a-207` | `Hero_dev_animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78811` |
| `a-187` | `mobile_app` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78184`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31934b`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917b9` |
| `a-215` | `pixel_animation_text` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7820a` |
| `a-211` | `branding_logo 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78524` |
| `a-180` | `branding_logo 6` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c785b3` |
| `a-203` | `branding_logo 7` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c785dc` |
| `a-179` | `branding_logo 4` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78561`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df961f` |
| `a-182` | `devices_animation_design` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78245` |
| `a-205` | `Devices scroll tablet` | `SCROLLING_IN_VIEW` | `niet expliciet` | `medium` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c781b2` |
| `a-195` | `gallery_brand_card` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7867d` |
| `a-181` | `front_back_animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7884e` |
| `a-184` | `flower_2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c78291` |
| `a-190` | `branding_logo 5` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c7858a`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df9648` |
| `a-186` | `🔵 Brands Scroll` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 66c6db5981004c94bd27afbf\|3ff76723-c7d9-8a05-1e87-ca3074c786b7` |
| `a-242` | `faq open close 3` | `DROPDOWN_CLOSE` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b4e`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319671`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319ba2`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319995`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b7a`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196a7`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b64`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31965d`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b8e`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31969d`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b3a`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319955`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31967b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3199a9`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31998b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319693`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319981`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31994b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b44`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196c5`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319941`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b70`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196bb`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196b1`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b98`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319687`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319667`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319977`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31995f`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31996b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31999f`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b84`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b58`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991acb`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991ad5`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991adf`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991ae9`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991af5`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b01`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b0b`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b15`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b1f`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b29`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b33` |
| `a-224` | `🔵 Brands Scroll 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31987e`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df9775` |
| `a-235` | `faq open 3` | `DROPDOWN_OPEN` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31995f`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31965d`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319693`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319977`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31996b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b7a`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319981`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31969d`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b84`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b70`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b58`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319671`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b3a`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b44`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31998b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b64`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b8e`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b4e`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319b98`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3199a9`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196bb`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31994b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319687`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319995`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31967b`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319667`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196b1`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31999f`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319955`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196a7`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319ba2`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196c5`<br>`id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319941`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991acb`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991ad5`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991adf`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991ae9`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991af5`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b01`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b0b`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b15`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b1f`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b29`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991b33` |
| `a-218` | `branding_logo 8` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319728` |
| `a-220` | `front_back_animation 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319a15`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763e95` |
| `a-241` | `Devices scroll tablet 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `medium` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319379`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917e7` |
| `a-250` | `pixel_animation_text 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3193d1`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f499183f` |
| `a-221` | `devices_animation_design 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31940c`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f499187a` |
| `a-240` | `Position_second_line_1440 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319361`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917cf` |
| `a-243` | `Hero_dev_animation 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3199d8`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763e58` |
| `a-236` | `dashboard_white 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319336`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917a4` |
| `a-233` | `second_line_animation 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319346`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917b4` |
| `a-229` | `New_scroll_up 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3199c8` |
| `a-228` | `brand_elements_move 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3197fb`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df96f2` |
| `a-225` | `bg_black_our_works 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3194fa`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991968` |
| `a-245` | `Devices scroll phone 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319379`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917e7` |
| `a-230` | `animation_text_opacity 3` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3193c6`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991834` |
| `a-231` | `dashboard_black 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319347`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917b5` |
| `a-249` | `json_dev_writ 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3199f5`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763e75` |
| `a-222` | `flower_2 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319458`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49918c6` |
| `a-223` | `animation_design_elements_1440 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31934f`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917bd` |
| `a-238` | `🔵 Brands Scroll 4` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319898`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df978f` |
| `a-226` | `New Scroll Animation 5` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319a2b`<br>`id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763eab` |
| `a-244` | `mobile_scroll_animation 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31949a`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991908` |
| `a-247` | `branding_logo 12` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3196eb`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df95e2` |
| `a-227` | `branding_logo 10` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319751` |
| `a-239` | `branding_logo 11` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3197a3`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df969a` |
| `a-237` | `Devices scroll desktop 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319379`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f49917e7` |
| `a-248` | `New Scroll Animation 7` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31941c`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f499188a` |
| `a-232` | `gallery_brand_card 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319844`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df973b` |
| `a-234` | `animation_text_opacity 4` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3193c6`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991834` |
| `a-246` | `New Scroll Animation 6` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d3197d9`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df96d0` |
| `a-219` | `branding_logo 9` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d31977a`<br>`id 66c6f87af99901dda5bf4bf8\|d6c716be-4591-06b5-349b-01f1a5df9671` |
| `a-251` | `effect_slide 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c6db5981004c94bd27afbf\|a00f81a7-a999-c68e-11e3-099e8d319393`<br>`id 66c6defc2affcc6502ca5d13\|f56e37f0-0970-93cd-42fe-8235f4991801` |
| `a-252` | `New Scroll Animation` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 66c708476a87c7e9109c4a15\|e883c53b-0c95-36c8-c41c-4a8555763e48` |
| `a-253` | `close_modal` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c708476a87c7e9109c4a15\|9001f9be-5d6b-8871-572b-df7b811805c7` |
| `a-254` | `close_popup` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 66c708476a87c7e9109c4a15\|9001f9be-5d6b-8871-572b-df7b811805cc` |
| `a-178` | `preloader` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1\|aab38b23-d130-2b6d-414f-e584fdd953ad` |
| `a-256` | `about-6 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|68aca963-cbdb-f57e-95d9-d192b9868ab2` |
| `a-257` | `New Scroll Animation 8` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|2a8753b8-3b85-8b9c-c07b-1f7ef622e640` |
| `a-255` | `Load` | `PAGE_START` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667d08f328f2df2d222670d1` |
| `a-258` | `New Timed Animation` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c6a5` |
| `a-259` | `hero-scroll-july vsr-2 5` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667d08f328f2df2d222670d1\|8579ced5-bb5c-a59c-9a98-4b378ead2465` |
| `a-265` | `hero-scroll-july vsr-2 7` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66cd8dffcc885c1c3b20b8d3\|8579ced5-bb5c-a59c-9a98-4b378ead2465`<br>`id 66d064ef6b231df0c0e0f231\|8579ced5-bb5c-a59c-9a98-4b378ead2465` |
| `a-262` | `Button Dots Hover In` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .button-wrapper` |
| `a-263` | `Button Dots Hover In 2` | `MOUSE_OUT` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .button-wrapper` |
| `a-266` | `apple-watch` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium` | `id 66cd8dffcc885c1c3b20b8d3\|757901a0-961e-c0e9-1b4d-147e2ed5b1bb` |
| `a-267` | `apple-watch mob` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 66cd8dffcc885c1c3b20b8d3\|757901a0-961e-c0e9-1b4d-147e2ed5b1bb` |
| `a-268` | `time-line-gradient` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium` | `id 66cd8dffcc885c1c3b20b8d3\|27282b9d-f26f-b05e-40d3-59ff95925888`<br>`id 66d064ef6b231df0c0e0f231\|f01b4663-a353-ea97-e4f9-95fc19605726`<br>`id 66d064ef6b231df0c0e0f231\|9e2b2814-73bd-b5cd-2a13-331720bc3f4c`<br>`id 66cd8dffcc885c1c3b20b8d3\|62b9f3cd-1142-61fc-08a7-4ee2ebb20f78`<br>`id 66cd8dffcc885c1c3b20b8d3\|7f823db4-a8b0-fa39-394c-3437e2677425` |
| `a-269` | `timeline-2` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium` | `id 66cd8dffcc885c1c3b20b8d3\|c8489335-a3b4-1127-2c9f-942b0f507b0f`<br>`id 66d064ef6b231df0c0e0f231\|c8489335-a3b4-1127-2c9f-942b0f507b0f`<br>`id 67403ac9d6630914b27160ef\|2c5cb9ae-b629-99d2-a64f-2c932421ff51` |
| `a-270` | `timeline-2 2` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium` | `id 66cd8dffcc885c1c3b20b8d3\|49b788bd-40e9-9216-7891-04de08d5d1a7`<br>`id 66d064ef6b231df0c0e0f231\|49b788bd-40e9-9216-7891-04de08d5d1a7`<br>`id 67403ac9d6630914b27160ef\|2c5cb9ae-b629-99d2-a64f-2c932421ff63` |
| `a-271` | `timeline-btn` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .time-line-btn-wrap` |
| `a-272` | `hero-about 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|a7cd9684-7712-b1ab-07ca-88ee417690b6` |
| `a-273` | `line 2` | `SCROLLING_IN_VIEW` | `niet expliciet` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6a\|c607c920-bd31-ea66-2ef1-a977c573326e` |
| `a-275` | `blog-scroll-bot-mob 2` | `PAGE_SCROLL_UP` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6e`<br>`id 667a7576e7e7ef3ba89b3f6d` |
| `a-274` | `blog-scroll-bot-mob` | `PAGE_SCROLL_DOWN` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f6e`<br>`id 667a7576e7e7ef3ba89b3f6d` |
| `a-276` | `Big Brands Scroll Desktop` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small` | `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c698` |
| `a-277` | `Brand Card View Mobile` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null` | `tiny` | `selector .big-brand-card` |
| `a-278` | `hero-scroll-july vsr-2 8` | `SCROLLING_IN_VIEW` | `niet expliciet` | `main`, `medium`, `small`, `tiny` | `id 67403ac9d6630914b27160ef\|8579ced5-bb5c-a59c-9a98-4b378ead2465`<br>`id 679f3eafc06be5ba91e7c5e0\|b0346028-3c19-d8b8-56d4-de3f28a06cd3`<br>`id 67a1e59312287567f30282e6\|b0346028-3c19-d8b8-56d4-de3f28a06cd3`<br>`id 67a33ec52eb3b603476f3b9c\|b0346028-3c19-d8b8-56d4-de3f28a06cd3` |
| `a-281` | `Filters Branding Close` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954299`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e9541ff`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e9541d8`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e9541da`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954167`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95418e`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954237`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954284`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954235`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954267`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954282`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95421a`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954169`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95414a`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95421c`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954148`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954190`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954269`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e954201`<br>`id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e9542a2` |
| `a-279` | `Navbar Open` | `NAVBAR_OPEN` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95405f` |
| `a-282` | `Filters Branding Open` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e9542a9` |
| `a-280` | `Navbar Close` | `NAVBAR_CLOSE` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 6798cf1e1f2a6c61e97e60d2\|d637b8be-3236-4156-6bb8-83327e95405f` |
| `a-283` | `Cookie Banner [SHOW]` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-banner_trigger` |
| `a-284` | `Cookie Banner [HIDE]` | `MOUSE_SECOND_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-banner_trigger` |
| `a-285` | `Preferences Checkbox [CHECK]` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-prefs_checkbox` |
| `a-286` | `Preferences Checkbox [UNCHECK]` | `MOUSE_SECOND_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-prefs_checkbox` |
| `a-287` | `Preferences Popup [SHOW]` | `MOUSE_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-prefs_trigger` |
| `a-288` | `Preferences Popup [HIDE]` | `MOUSE_SECOND_CLICK` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `selector .fs-cc-prefs_trigger` |
| `pluginLottieLoop` | `zonder titel` | `SCROLL_INTO_VIEW` | `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`<br>`scrollOffsetValue: 29, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`<br>`scrollOffsetValue: 5, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 667a7576e7e7ef3ba89b3f68\|7f69b644-7d39-e2d6-2ea2-1ddb6d71ec9f`<br>`id 667a7576e7e7ef3ba89b3f68\|71624db4-0c8e-af73-943c-3cfa83e69698`<br>`id 667a7576e7e7ef3ba89b3f68\|a8b5ed7f-a19b-172d-212f-f6801490ffef`<br>`id 667a7576e7e7ef3ba89b3f68\|b0170ed8-73ee-46fa-55af-af0dd6b60bfa`<br>`id 667a7576e7e7ef3ba89b3f68\|132d08b2-e7f3-0950-438f-168be07d69d0`<br>`id 667a7576e7e7ef3ba89b3f68\|bb651abb-8425-2d6c-6791-24c3f6b1fdcc`<br>`id 667a7576e7e7ef3ba89b3f68\|06399efc-a5f9-c094-0f51-db1264daf558`<br>`id 66cd8dffcc885c1c3b20b8d3\|5ff23bc4-4f99-f284-c379-b1191c058e61`<br>`id 66cd8dffcc885c1c3b20b8d3\|d0c989bf-2a57-937d-68a5-1800c6bc1266`<br>`id 66cd8dffcc885c1c3b20b8d3\|62b9f3cd-1142-61fc-08a7-4ee2ebb20f7a`<br>`id 66cd8dffcc885c1c3b20b8d3\|7f823db4-a8b0-fa39-394c-3437e2677427` |
| `pluginLottie` | `zonder titel` | `MOUSE_OVER` | `scrollOffsetValue: null, scrollOffsetUnit: null, delay: 0, direction: null, loop: false, effectIn: null` | `main`, `medium`, `small`, `tiny` | `id 1f1db639-7034-cf0f-006c-9f8dedd8dfa7`<br>`id 1d729750-ca10-53c2-fe3d-aa83847a521f` |


## Action list details

### pluginLottie — zonder titel

Triggers:
- `e-527` `MOUSE_OVER` target `id 1f1db639-7034-cf0f-006c-9f8dedd8dfa7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: 0, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-529` `MOUSE_OVER` target `id 1d729750-ca10-53c2-fe3d-aa83847a521f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: 0, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 0 -> id N/A (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 100 -> id N/A (duration automs, delay 0ms, easing lineair/geen)

### pluginLottieLoop — zonder titel

Triggers:
- `e-480` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|7f69b644-7d39-e2d6-2ea2-1ddb6d71ec9f`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-482` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|71624db4-0c8e-af73-943c-3cfa83e69698`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-484` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|a8b5ed7f-a19b-172d-212f-f6801490ffef`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-486` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|b0170ed8-73ee-46fa-55af-af0dd6b60bfa`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-488` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|132d08b2-e7f3-0950-438f-168be07d69d0`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-490` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|bb651abb-8425-2d6c-6791-24c3f6b1fdcc`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-496` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|06399efc-a5f9-c094-0f51-db1264daf558`; offsets `scrollOffsetValue: 29, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-915` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|5ff23bc4-4f99-f284-c379-b1191c058e61`; offsets `scrollOffsetValue: 5, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-919` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|d0c989bf-2a57-937d-68a5-1800c6bc1266`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-953` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|62b9f3cd-1142-61fc-08a7-4ee2ebb20f7a`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-957` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|7f823db4-a8b0-fa39-394c-3437e2677427`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: 0, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 0 -> id N/A (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 100 -> id N/A (duration automs, delay 0ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 0 -> id N/A (duration 0ms, delay 0ms, easing lineair/geen)

### a-42 — service-card-brand-hover

Triggers:
- `e-403` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|37e11e59-ebd5-d47b-ea9d-28ff32111258`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - STYLE_OPACITY: opacity 1 -> selector .brand-item-img.abs.set-1 (duration 1200ms, delay 700ms, easing ease)
  - STYLE_OPACITY: opacity 0 -> selector .brand-item-img.abs.set-2 (duration 1000ms, delay 700ms, easing ease)
- Groep 1
  - STYLE_OPACITY: opacity 1 -> selector .brand-item-img.abs.set-2 (duration 1200ms, delay 700ms, easing ease)
  - STYLE_OPACITY: opacity 0 -> selector .brand-item-img.abs.set-1 (duration 1000ms, delay 700ms, easing ease)

### a-46 — btn-clutch

Triggers:
- `e-139` `MOUSE_OVER` target `id 667a7576e7e7ef3ba89b3f6e|7eed128a-0ef9-d5dc-b0ff-fdecac52bf62`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-959` `MOUSE_OVER` target `id 667a7576e7e7ef3ba89b3f6d|75385c40-b32b-66cc-3b59-e34b27bd812d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x -100% -> selector .btn-img-2 (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 100%, y -100% -> selector .btn-img-1 (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y -1.6875rem -> selector .link-arrow-txt.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y -1.875rem -> selector .link-arrow-txt.first (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0%, y -100% -> selector .btn-img-2 (duration 500ms, delay 0ms, easing ease)

### a-47 — btn-clutch 2

Triggers:
- `e-140` `MOUSE_OUT` target `id 667a7576e7e7ef3ba89b3f6e|7eed128a-0ef9-d5dc-b0ff-fdecac52bf62`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-960` `MOUSE_OUT` target `id 667a7576e7e7ef3ba89b3f6d|75385c40-b32b-66cc-3b59-e34b27bd812d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: x 0%, y 0% -> selector .btn-img-1 (duration 0ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0rem -> selector .link-arrow-txt.second (duration 400ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> selector .link-arrow-txt.first (duration 400ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -100%, y 0% -> selector .btn-img-2 (duration 0ms, delay 0ms, easing lineair/geen)

### a-48 — footer-social-hover

Triggers:
- `e-75` `MOUSE_OVER` target `selector .social-link-list-item`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_SCALE: scaleX 0, scaleY 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_SCALE: scaleX 1.25, scaleY 1.25 -> {} (duration 700ms, delay 0ms, easing ease)

### a-49 — footer-social-hover out

Triggers:
- `e-76` `MOUSE_OUT` target `selector .social-link-list-item`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_SCALE: scaleX 0, scaleY 0 -> {} (duration 700ms, delay 0ms, easing ease)

### a-76 — faq open

Triggers:
- `e-322` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539f8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-324` `DROPDOWN_OPEN` target `selector .faq-dropdown.dark`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-325` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53988`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-332` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539ae`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-334` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539e0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-335` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539a0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-338` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539ec`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-340` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539c8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-341` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539d4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-342` `DROPDOWN_OPEN` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53994`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-860` `DROPDOWN_OPEN` target `id 667d08f328f2df2d222670d1|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-874` `DROPDOWN_OPEN` target `id 1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-905` `DROPDOWN_OPEN` target `id 66cd8dffcc885c1c3b20b8d3|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-933` `DROPDOWN_OPEN` target `id 66d064ef6b231df0c0e0f231|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_SIZE: height 0px -> selector .drop-list (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ -90deg -> selector .line-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .faq-answer-p (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - STYLE_SIZE: config -> selector .drop-list (duration 600ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .line-1 (duration 400ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 45deg -> selector .plus-faq (duration 300ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> selector .faq-answer-p (duration 600ms, delay 0ms, easing lineair/geen)

### a-77 — faq open close

Triggers:
- `e-321` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539c8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-323` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539f8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-326` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539d4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-327` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53994`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-328` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539ae`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-329` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53988`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-330` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539e0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-333` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539a0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-337` `DROPDOWN_CLOSE` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a539ec`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-339` `DROPDOWN_CLOSE` target `selector .faq-dropdown.dark`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-861` `DROPDOWN_CLOSE` target `id 667d08f328f2df2d222670d1|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-875` `DROPDOWN_CLOSE` target `id 1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-906` `DROPDOWN_CLOSE` target `id 66cd8dffcc885c1c3b20b8d3|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-934` `DROPDOWN_CLOSE` target `id 66d064ef6b231df0c0e0f231|1f714ca5-f5a4-7114-9551-240cb897faf8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - STYLE_OPACITY: opacity 0 -> selector .faq-answer-p (duration 600ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ -90deg -> selector .line-1 (duration 350ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_SIZE: height 0px -> selector .drop-list (duration 500ms, delay 0ms, easing ease)

### a-83 — about-3 new

Triggers:
- `e-346` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|72de45cf-e4d9-e5e2-2d5f-cf6a3744e38b`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x 100vw -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 13%
    - STYLE_OPACITY: opacity 1 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 15%
    - TRANSFORM_MOVE: x 100% -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 89.5%
    - TRANSFORM_MOVE: x -429% -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)

### a-95 — service-card-1 lottie-loop

Triggers:
- `e-405` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|9327c432-eee2-0657-eb01-f570952c3b22`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .brand-lottie (duration 6230ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .brand-lottie (duration 0ms, delay 300ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .brand-lottie (duration 6230ms, delay 0ms, easing lineair/geen)
- Groep 3
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .brand-lottie (duration 0ms, delay 300ms, easing lineair/geen)

### a-96 — service-card-2 lottie-loop

Triggers:
- `e-407` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|84e57622-0b7e-ccf4-d7c3-afac8d8200e3`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .platform-lottie (duration 2570ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .platform-lottie (duration 0ms, delay 300ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .platform-lottie (duration 2570ms, delay 0ms, easing lineair/geen)
- Groep 3
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .platform-lottie (duration 0ms, delay 0ms, easing lineair/geen)

### a-97 — service-card-3 lottie-loop

Triggers:
- `e-409` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|90c825d6-8459-ea93-9b52-82b0890cdb45`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 100 -> {} (duration 4900ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 0 -> {} (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 100 -> {} (duration 4900ms, delay 0ms, easing lineair/geen)
- Groep 3
  - PLUGIN_LOTTIE: lottie progress 0 -> {} (duration 0ms, delay 0ms, easing lineair/geen)

### a-98 — service-card-4 lottie

Triggers:
- `e-411` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|336f199c-c4b5-e579-bb2b-45693c0d9886`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .web-lottie (duration 4470ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .web-lottie (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 100 -> selector .web-lottie (duration 4470ms, delay 0ms, easing lineair/geen)
- Groep 3
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .web-lottie (duration 0ms, delay 0ms, easing lineair/geen)

### a-99 — service-card-6-lottie

Triggers:
- `e-413` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|eff56ce8-5a94-9411-61c5-ecb0aaa91946`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 93 -> selector .brand-lottie (duration 3470ms, delay 0ms, easing lineair/geen)
- Groep 1
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .brand-lottie (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 97 -> selector .brand-lottie (duration 3470ms, delay 0ms, easing lineair/geen)
- Groep 3
  - PLUGIN_LOTTIE: lottie progress 0 -> selector .brand-lottie (duration 0ms, delay 0ms, easing lineair/geen)

### a-100 — home-serv-heading

Triggers:
- `e-415` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|f4d214d0-6c36-9360-e2b5-d9bf4dbbc7ac`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 12%
    - TRANSFORM_MOVE: x null%, y -49% -> selector .shadow (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .b1.serv-sub.second (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .section-name (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .b1.serv-sub.max-w-40 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .hero-tag-wrap.serv (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 18%
    - TRANSFORM_MOVE: x -50%, y -100% -> selector .stats-card-gradient.services.line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - STYLE_OPACITY: opacity 1 -> selector .section-name (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .b1.serv-sub.max-w-40 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .hero-tag-wrap.serv (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - STYLE_OPACITY: opacity 0 -> selector .b1.serv-sub.second (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x null%, y 38% -> selector .shadow (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - TRANSFORM_MOVE: x -50%, y 0% -> selector .stats-card-gradient.services.line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> selector .b1.serv-sub.second (duration 500ms, delay 0ms, easing lineair/geen)

### a-112 — serv-heading shadow

Triggers:
- `e-438` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|98032b54-2b53-4f65-5beb-c9c692498407`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-439` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|52978769-3c0a-2d4e-8056-bd518924caa3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-440` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|03f2003e-b2be-b660-fdc9-639e0bf564f3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-441` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|ccb4888d-f0e5-1e1a-a5b1-256f7c1efd19`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x null%, y -48% -> selector .shadow (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - TRANSFORM_MOVE: x null%, y -48% -> selector .shadow (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .section-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - STYLE_OPACITY: opacity 1 -> selector .section-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: x null%, y 35% -> selector .shadow (duration 500ms, delay 0ms, easing lineair/geen)

### a-113 — Stats Cards View 2

Triggers:
- `e-442` `SCROLL_INTO_VIEW` target `id f515b4c4-2fcd-4d20-0746-26efdc8bb300`; offsets `scrollOffsetValue: 10, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-553` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|2f4498e5-1c2a-9001-5e46-2389b7a620e5`; offsets `scrollOffsetValue: 10, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 667d08f328f2df2d222670d1|1e8de970-d96f-4fe6-0a77-9ba70590e112 (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x -90% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|1e8de970-d96f-4fe6-0a77-9ba70590e112 (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 667d08f328f2df2d222670d1|1e8de970-d96f-4fe6-0a77-9ba70590e112 (duration 2000ms, delay 0ms, easing outExpo)
  - TRANSFORM_MOVE: x 0% -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|1e8de970-d96f-4fe6-0a77-9ba70590e112 (duration 500ms, delay 0ms, easing lineair/geen)

### a-117 — home-second

Triggers:
- `e-456` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|bb32a1b6-2396-a007-5780-aa517848547a`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - TRANSFORM_MOVE: x -30rem -> selector .stats-card-wrapper.img-list-set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -15deg -> selector .stats-card-wrapper.img-list-set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 60rem -> selector .left-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 29%
    - TRANSFORM_ROTATE: rotateZ 15deg -> selector .stats-card-wrapper.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 28rem, y 5.69rem -> selector .stats-card-wrapper.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 60rem -> selector .right-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: x -23rem, y 5rem -> selector .stats-card-wrapper.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -15deg -> selector .stats-card-wrapper.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 60rem -> selector .left-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .left-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - TRANSFORM_MOVE: x 0rem -> selector .stats-card-wrapper.img-list-set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .stats-card-wrapper.img-list-set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 23rem -> selector .left-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .left-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - TRANSFORM_MOVE: x 28rem, y 10.69rem -> selector .stats-card-wrapper.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 15deg -> selector .stats-card-wrapper.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 60rem -> selector .right-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .right-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .stats-card-wrapper.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0rem, y 5.69rem -> selector .stats-card-wrapper.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 23rem -> selector .right-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .right-stat-gradient.top (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 47%
    - STYLE_OPACITY: opacity 1 -> selector .left-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .stats-card-wrapper.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .stats-card-wrapper.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 23rem -> selector .left-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .left-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - STYLE_OPACITY: opacity 1 -> selector .right-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - TRANSFORM_MOVE: x 0rem, y 5.69rem -> selector .stats-card-wrapper.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .stats-card-wrapper.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_SIZE: width 23rem -> selector .right-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .right-stat-gradient.bot (duration 500ms, delay 0ms, easing lineair/geen)

### a-122 — hero-scroll-july vsr-2 2

Triggers:
- `e-386` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|8579ced5-bb5c-a59c-9a98-4b378ead2465`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 29%
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0rem -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_SIZE: width 97.5%, height 97.5% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45.5%
    - STYLE_SIZE: width 100%, height 100% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y -30vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -34.5rem -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 53%
    - TRANSFORM_MOVE: y -51vw -> selector .hero-paralax.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -63vw -> selector .hero-paralax.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -62vw -> selector .hero-paralax.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 54%
    - TRANSFORM_MOVE: y -70vw -> selector .hero-paralax.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -57vw -> selector .hero-paralax.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -60vw -> selector .hero-paralax.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -59vw -> selector .hero-paralax.set-5 (duration 500ms, delay 0ms, easing lineair/geen)

### a-125 — secondary btn hover

Triggers:
- `e-468` `MOUSE_OVER` target `selector .btn-secondary`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y 0rem -> selector .btn-text-secondary.first-txt (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0rem -> selector .btn-text-secondary.second-txt (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x -1.5rem, y 1.5rem -> selector .icon-btn-secondary.second-icon (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .icon-btn-secondary.first-icon (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .icon-btn-secondary.second-icon (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y -1.17rem -> selector .btn-text-secondary.second-txt (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y -1.3rem -> selector .btn-text-secondary.first-txt (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 1.5rem, y -1.5rem -> selector .icon-btn-secondary.first-icon (duration 500ms, delay 0ms, easing ease)

### a-126 — secondary btn hover 2

Triggers:
- `e-469` `MOUSE_OUT` target `selector .btn-secondary`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: y 0rem -> selector .btn-text-secondary.first-txt (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> selector .btn-text-secondary.second-txt (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -1.5rem, y 1.5rem -> selector .icon-btn-secondary.second-icon (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .icon-btn-secondary.first-icon (duration 500ms, delay 0ms, easing ease)

### a-127 — cta-scroll

Triggers:
- `e-470` `SCROLLING_IN_VIEW` target `id 505a594f-6be9-46a4-c000-a940fb77655c`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x 0%, y 100% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: x 0%, y 0% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)

### a-129 — loopgradient

Triggers:
- `e-471` `SCROLL_INTO_VIEW` target `selector .stats-card-wrapper`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x -20vw, y 17vw -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 29vw, y 10vw -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 17vw, y 26vw -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x -2vw, y 26vw -> selector .stats-card-gradient (duration 1000ms, delay 0ms, easing lineair/geen)

### a-131 — heading-shadow 2

Triggers:
- `e-475` `SCROLLING_IN_VIEW` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53974`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - TRANSFORM_MOVE: y -40% -> id 0ed997cc-b698-2ae3-cf52-1d06f9a53979 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .heading-3.text-align-center.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 17%
    - TRANSFORM_MOVE: x -54% -> id 0ed997cc-b698-2ae3-cf52-1d06f9a53a05 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - STYLE_OPACITY: opacity 1 -> selector .heading-3.text-align-center.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - TRANSFORM_MOVE: y 63% -> id 0ed997cc-b698-2ae3-cf52-1d06f9a53979 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x 30% -> id 0ed997cc-b698-2ae3-cf52-1d06f9a53a05 (duration 500ms, delay 0ms, easing lineair/geen)

### a-132 — heading-shadow 3

Triggers:
- `e-474` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|e8b85403-f394-d269-3ea7-1668de36b09d`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 16%
    - STYLE_OPACITY: opacity 0 -> selector .heading-2.text-align-center.max-w-55.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .collection-news-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> selector .heading-2.text-align-center.max-w-55.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .collection-news-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 44%
    - STYLE_OPACITY: opacity 1 -> selector .heading-2.text-align-center.max-w-55.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 0 -> selector .heading-2.text-align-center.max-w-55.text-color-white (duration 500ms, delay 0ms, easing lineair/geen)

### a-133 — heading-shadow 4

Triggers:
- `e-473` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|21e6ff8c-2434-0b5b-a445-356906aeb701`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0 -> selector .heading-2.text-align-center.max-w-55 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .awards-list (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 1 -> selector .awards-list (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - STYLE_OPACITY: opacity 1 -> selector .heading-2.text-align-center.max-w-55 (duration 500ms, delay 0ms, easing lineair/geen)

### a-134 — cta-border-rotate

Triggers:
- `e-476` `SCROLL_INTO_VIEW` target `id 87fb7b75-2f9f-4817-13e4-566ea0f8bfae`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-478` `SCROLL_INTO_VIEW` target `selector .card-glow`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 0%, y 0% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 45% -> selector .stats-card-gradient (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: y 29% -> selector .stats-card-gradient (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x 0%, y 48% -> selector .stats-card-gradient (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: y 0% -> selector .stats-card-gradient (duration 1500ms, delay 0ms, easing lineair/geen)

### a-138 — mob-menu open

Triggers:
- `e-502` `MOUSE_CLICK` target `id d854c265-bf21-cd91-d958-4207ee115060`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.first (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x 0rem -> id d854c265-bf21-cd91-d958-4207ee115060 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_SIZE: height 4rem -> selector .header-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(0, 0, 0, 0) -> selector .header-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.second (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_ROTATE: rotateZ -45deg -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0.5rem -> id d854c265-bf21-cd91-d958-4207ee115060 (duration 500ms, delay 0ms, easing ease)
  - STYLE_BACKGROUND_COLOR: rgba(8, 8, 8, 1) -> selector .header-wrapper (duration 300ms, delay 0ms, easing ease)
  - STYLE_SIZE: height 100vh -> selector .header-wrapper (duration 900ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -0.5rem, y -0.3rem -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -0.5rem, y 0.3rem -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 45deg -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)

### a-139 — mob-menu close

Triggers:
- `e-503` `MOUSE_SECOND_CLICK` target `id d854c265-bf21-cd91-d958-4207ee115060`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`
- `e-521` `MOUSE_SECOND_CLICK` target `id cbc27156-e35e-4c75-5220-d918b1e3d19a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 — stagger ca. 900ms
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0rem -> selector .burger-wrap (duration 500ms, delay 0ms, easing ease)
  - STYLE_SIZE: height 4rem -> selector .header-wrapper (duration 900ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x 0rem, y 0rem -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)
  - STYLE_BACKGROUND_COLOR: rgba(0, 0, 0, 0) -> selector .header-wrapper (duration 900ms, delay 900ms, easing ease)

### a-147 — scroll view-services-mob

Triggers:
- `e-508` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|f4d214d0-6c36-9360-e2b5-d9bf4dbbc7ac`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y -50% -> selector .shadow.vertical.small (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y 100% -> selector .shadow.vertical.small (duration 2000ms, delay 0ms, easing lineair/geen)

### a-148 — scroll view-services-mob 2

Triggers:
- `e-510` `SCROLL_INTO_VIEW` target `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c698`; offsets `scrollOffsetValue: 30, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y -60% -> selector .shadow.white.vert (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y 100% -> selector .shadow.white.vert (duration 2000ms, delay 0ms, easing lineair/geen)

### a-150 — scroll view-services-mob 4

Triggers:
- `e-514` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|e8b85403-f394-d269-3ea7-1668de36b09d`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y -30% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y 30% -> selector .shadow.vertical (duration 1000ms, delay 0ms, easing lineair/geen)

### a-151 — scroll view-services-mob 5

Triggers:
- `e-516` `SCROLL_INTO_VIEW` target `id 0ed997cc-b698-2ae3-cf52-1d06f9a53974`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y -30% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y 30% -> selector .shadow.vertical (duration 1000ms, delay 0ms, easing lineair/geen)

### a-152 — scroll view-services-mob 6

Triggers:
- `e-512` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|21e6ff8c-2434-0b5b-a445-356906aeb701`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y -40% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y 30% -> selector .shadow.vertical (duration 1000ms, delay 0ms, easing lineair/geen)

### a-153 — hero-about

Triggers:
- `e-518` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|a7cd9684-7712-b1ab-07ca-88ee417690b6`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 31%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .aboot-lottie-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -440% -> selector .subheading-hero-about.desktop (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .subheading-hero-about.desktop (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-about-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -10% -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - PLUGIN_LOTTIE: lottie progress 53.8 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0% -> selector .aboot-lottie-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - TRANSFORM_MOVE: y -25vw -> selector .hero-about-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 63%
    - STYLE_OPACITY: opacity 0 -> selector .subheading-hero-about.desktop (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -493% -> selector .subheading-hero-about.desktop (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.2, scaleY 0.2 -> selector .aboot-lottie-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -49% -> selector .aboot-lottie-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0% -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - STYLE_OPACITY: opacity 1 -> selector .subheading-hero-about.desktop (duration 500ms, delay 0ms, easing lineair/geen)

### a-155 — cta-border-rotate 2

Triggers:
- `e-498` `SCROLL_INTO_VIEW` target `selector .case-item-wrap`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 0%, y 0% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 45% -> selector .stats-card-gradient (duration 1100ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: y 29% -> selector .stats-card-gradient (duration 1100ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x 0%, y 36% -> selector .stats-card-gradient (duration 1100ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: y 0% -> selector .stats-card-gradient (duration 1100ms, delay 0ms, easing lineair/geen)

### a-157 — solution

Triggers:
- `e-531` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|1ffe62eb-c31d-f6e4-7d34-6b51315eec98`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 17%
    - TRANSFORM_MOVE: y -67% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .section-tittle (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 80% -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: y 80% -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .section-tittle (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 0% -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .solution-card-item.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 37%
    - TRANSFORM_MOVE: y 38% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 80% -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0% -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .solution-card-item.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - TRANSFORM_MOVE: y 0% -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .solution-card-item.set-3 (duration 500ms, delay 0ms, easing lineair/geen)

### a-158 — mob-menu open white

Triggers:
- `e-520` `MOUSE_CLICK` target `id cbc27156-e35e-4c75-5220-d918b1e3d19a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.first (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(0, 0, 0, 0) -> selector .header-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x 0rem -> id d854c265-bf21-cd91-d958-4207ee115060 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_SIZE: height 4rem -> selector .header-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(0, 0, 0, 0) -> selector .header-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .burger-line.second (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_ROTATE: rotateZ -45deg -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - STYLE_BACKGROUND_COLOR: rgba(255, 255, 255, 1) -> selector .header-wrapper (duration 300ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: x 0.5rem -> id d854c265-bf21-cd91-d958-4207ee115060 (duration 500ms, delay 0ms, easing ease)
  - STYLE_SIZE: height 100vh -> selector .header-wrapper (duration 900ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -0.5rem, y -0.3rem -> selector .burger-line.second (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: x -0.5rem, y 0.3rem -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 45deg -> selector .burger-line.first (duration 500ms, delay 0ms, easing ease)

### a-159 — solutionmob

Triggers:
- `e-526` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f68|1ffe62eb-c31d-f6e4-7d34-6b51315eec98`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 17%
    - TRANSFORM_MOVE: y -60% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: y 38% -> selector .shadow.vertical (duration 500ms, delay 0ms, easing lineair/geen)

### a-161 — stat-intoview

Triggers:
- `e-537` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|4b054b29-5f21-0fe5-b671-0a3519eadfed`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-539` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|c25a901b-23a9-6216-5956-fb7a8deb8c27`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-541` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|6c1ce564-d003-6602-345a-a768f1e4a425`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y 3rem -> selector .stat-num.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .stat-num.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .stat-num.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .stat-num.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .stat-num.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 1.5rem -> selector .stat-num.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 2rem -> selector .stat-num.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 2.5rem -> selector .stat-num.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1 — stagger ca. 100ms
  - TRANSFORM_MOVE: y 0rem -> selector .stat-num.set-1 (duration 600ms, delay 0ms, easing ease)
  - STYLE_OPACITY: opacity 1 -> selector .stat-num.set-1 (duration 600ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> selector .stat-num.set-2 (duration 600ms, delay 100ms, easing ease)
  - STYLE_OPACITY: opacity 1 -> selector .stat-num.set-2 (duration 600ms, delay 100ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> selector .stat-num.set-3 (duration 600ms, delay 200ms, easing ease)
  - STYLE_OPACITY: opacity 1 -> selector .stat-num.set-3 (duration 600ms, delay 200ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> selector .stat-num.set-4 (duration 600ms, delay 300ms, easing ease)
  - STYLE_OPACITY: opacity 1 -> selector .stat-num.set-4 (duration 600ms, delay 300ms, easing ease)

### a-163 — ;paly

Triggers:
- `e-535` `MOUSE_OVER` target `id 335a1b7a-c392-2315-8be8-c943ebafd459`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: 141, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 100 -> id 335a1b7a-c392-2315-8be8-c943ebafd459 (duration 2000ms, delay 0ms, easing lineair/geen)

### a-164 — ;paly 2

Triggers:
- `e-536` `MOUSE_OUT` target `id 335a1b7a-c392-2315-8be8-c943ebafd459`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - PLUGIN_LOTTIE: lottie progress 0 -> id 335a1b7a-c392-2315-8be8-c943ebafd459 (duration 0ms, delay 0ms, easing lineair/geen)

### a-165 — cases-new 3

Triggers:
- `e-318` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|be24b132-7907-2a09-561b-a870a5aa1003`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 8%
    - TRANSFORM_ROTATE: rotateZ -31deg -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .top-gradient (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - STYLE_OPACITY: opacity 0 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - TRANSFORM_MOVE: y 25% -> selector .cards-cases-left-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -31deg -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - STYLE_OPACITY: opacity 1 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 22%
    - TRANSFORM_MOVE: y 0% -> selector .case--new-heading-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> selector .case-rotate-img.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - TRANSFORM_ROTATE: rotateZ -14deg -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 8% -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - TRANSFORM_MOVE: y -112% -> selector .case--new-heading-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - STYLE_OPACITY: opacity 1 -> selector .case-rotate-img.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 54%
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - STYLE_OPACITY: opacity 1 -> selector .case-rotate-img.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 3% -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 63%
    - STYLE_OPACITY: opacity 1 -> selector .case-rotate-img.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 67%
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 71%
    - STYLE_OPACITY: opacity 0 -> selector .case-rotate-img.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 77%
    - STYLE_OPACITY: opacity 1 -> selector .case-rotate-img.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -79% -> selector .cards-cases-left-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 14deg -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -2% -> selector .rotate-ellipse-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 89%
    - STYLE_BACKGROUND_COLOR: rgba(23, 23, 23, 1) -> selector .cards-cases-right (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .cards-cases-left (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .top-gradient (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 94%
    - STYLE_BACKGROUND_COLOR: rgba(8, 8, 8, 1) -> selector .cards-cases-right (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .cards-cases-left (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .top-gradient (duration 500ms, delay 0ms, easing lineair/geen)

### a-167 — about-6

Triggers:
- `e-534` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|68aca963-cbdb-f57e-95d9-d192b9868ab2`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 8%
    - STYLE_OPACITY: opacity 0 -> selector .text-vawes (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 5rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - STYLE_OPACITY: opacity 1 -> selector .text-vawes (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 22%
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -12deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 22.2%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0vw -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -12deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - TRANSFORM_MOVE: y 0rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - TRANSFORM_MOVE: x 0vw, y -42vw -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 16deg -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -10rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 44%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0vw -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 47%
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 53%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - TRANSFORM_ROTATE: rotateZ -16deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y -43vw -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0vw -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20.5rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 69%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - TRANSFORM_MOVE: x 0vw, y -42vw -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 16deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -31rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)

### a-168 — tag-border

Triggers:
- `e-544` `SCROLL_INTO_VIEW` target `id 667d08f328f2df2d222670d1|6d1332f8-3212-0ba2-8e33-ec01b8e03f28`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x -18%, y 2% -> selector .stats-card-gradient.services.hero-home (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 109%, y 2% -> selector .stats-card-gradient.services.hero-home (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 160%, y 73% -> selector .stats-card-gradient.services.hero-home (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x -3%, y 73% -> selector .stats-card-gradient.services.hero-home (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: x -18%, y 2% -> selector .stats-card-gradient.services.hero-home (duration 1000ms, delay 0ms, easing lineair/geen)

### a-169 — Footer Link Hover In

Triggers:
- `e-546` `MOUSE_OVER` target `selector .footer-link`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_ROTATE: rotateX 0deg -> selector .footer-flip-hover (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_ROTATE: rotateX 90deg -> selector .footer-flip-hover (duration 500ms, delay 0ms, easing ease)

### a-170 — Footer Link Hover Out

Triggers:
- `e-547` `MOUSE_OUT` target `selector .footer-link`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`

Discrete groepen:
- Groep 0
  - TRANSFORM_ROTATE: rotateX 0deg -> selector .footer-flip-hover (duration 500ms, delay 0ms, easing ease)

### a-171 — New Scroll Animation

Triggers:
- `e-548` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|2a8753b8-3b85-8b9c-c07b-1f7ef622e640`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 61%
    - STYLE_OPACITY: opacity 1 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 84%
    - STYLE_OPACITY: opacity 0 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)

### a-172 — about-3 new mob

Triggers:
- `e-549` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|72de45cf-e4d9-e5e2-2d5f-cf6a3744e38b`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x 20rem -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 13%
    - TRANSFORM_MOVE: x 30rem -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - STYLE_OPACITY: opacity 1 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 18%
    - STYLE_OPACITY: opacity 0 -> selector .the-story (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 89.5%
    - TRANSFORM_MOVE: x -293rem -> selector .text--img-sticky-block (duration 500ms, delay 0ms, easing lineair/geen)

### a-173 — home-2mob

Triggers:
- `e-550` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|bb32a1b6-2396-a007-5780-aa517848547a`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 4%
    - STYLE_OPACITY: opacity 0 -> selector .anim-heading-home (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - TRANSFORM_MOVE: y -50% -> selector .shadow.vertical.small-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - TRANSFORM_MOVE: y 0% -> selector .shadow.vertical.small-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .anim-heading-home (duration 500ms, delay 0ms, easing lineair/geen)

### a-174 — home-2mob 2

Triggers:
- `e-551` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|5c847b91-7380-fef8-2822-e0566817e79b`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 23%
    - STYLE_OPACITY: opacity 0 -> selector .mission-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 26%
    - TRANSFORM_MOVE: y -50% -> selector .shadow.vertical.small-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 1 -> selector .mission-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 40% -> selector .shadow.vertical.small-2 (duration 500ms, delay 0ms, easing lineair/geen)

### a-175 — line

Triggers:
- `e-552` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|c607c920-bd31-ea66-2ef1-a977c573326e`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x 0vw -> selector .left-line (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .section.ava._1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - STYLE_OPACITY: opacity 1 -> selector .section.ava._1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: x -20vw -> selector .left-line (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 20vw -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 98%
    - STYLE_OPACITY: opacity 1 -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 100%
    - STYLE_OPACITY: opacity 0 -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)

### a-177 — Stats Cards View 3

Triggers:
- `e-524` `SCROLL_INTO_VIEW` target `id 667a7576e7e7ef3ba89b3f68|30e718eb-6422-0827-e2d5-89d4e9678760`; offsets `scrollOffsetValue: 10, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: x -38% -> selector .stats-card-gradient (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 0% -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 0%, y 32% -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x -38%, y 0% -> selector .stats-card-gradient (duration 2000ms, delay 0ms, easing lineair/geen)

### a-178 — preloader

Triggers:
- `e-864` `MOUSE_CLICK` target `id 667d08f328f2df2d222670d1|aab38b23-d130-2b6d-414f-e584fdd953ad`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_SIZE: width 100%, height 100% -> id 667d08f328f2df2d222670d1|6f33be46-cdb6-53ec-7477-70b76324366d (duration 500ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display flex -> id 667d08f328f2df2d222670d1|3487650e-4c26-54c5-2aef-2841b8075482 (duration 0ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0vh -> id 667d08f328f2df2d222670d1|b4f76b9d-153b-b1cf-8480-9fa8af99da1a (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y -20vh -> id 667d08f328f2df2d222670d1|b4f76b9d-153b-b1cf-8480-9fa8af99da1a (duration 0ms, delay 200ms, easing outExpo)
- Groep 2
  - PLUGIN_LOTTIE: lottie progress 79 -> id 667d08f328f2df2d222670d1|e03bb02e-34c0-a26d-6036-7530a5b4d258 (duration 1580ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0vh -> id 667d08f328f2df2d222670d1|b4f76b9d-153b-b1cf-8480-9fa8af99da1a (duration 1000ms, delay 1600ms, easing outExpo)
  - STYLE_SIZE: width 100%, height 0% -> id 667d08f328f2df2d222670d1|6f33be46-cdb6-53ec-7477-70b76324366d (duration 1000ms, delay 1650ms, easing outExpo)
  - GENERAL_DISPLAY: display none -> id 667d08f328f2df2d222670d1|3487650e-4c26-54c5-2aef-2841b8075482 (duration 0ms, delay 2000ms, easing lineair/geen)

### a-179 — branding_logo 4

Triggers:
- `e-639` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78561`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-807` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df961f`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9646 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9646 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9623 (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - TRANSFORM_MOVE: y 0% -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing ease)
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9623 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -28% -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9621 (duration 500ms, delay 0ms, easing lineair/geen)

### a-180 — branding_logo 6

Triggers:
- `e-630` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c785b3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.002%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.003%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> {} (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.08, scaleY 0.08 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -224px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-181 — front_back_animation

Triggers:
- `e-647` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7884e`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0.13 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 26%
    - STYLE_OPACITY: opacity 0.13 -> id 652d043f8189094afee170f1|f672369d-7dff-8509-27b4-11e6c7bc3d0a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170f1|f672369d-7dff-8509-27b4-11e6c7bc3d0a (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|6bac70bb-5c81-d083-4e27-e562abbbc840 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170f1|6bac70bb-5c81-d083-4e27-e562abbbc840 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|f672369d-7dff-8509-27b4-11e6c7bc3d0a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -101px -> id 652d043f8189094afee170f1|f672369d-7dff-8509-27b4-11e6c7bc3d0a (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.13 -> id 652d043f8189094afee170f1|6bac70bb-5c81-d083-4e27-e562abbbc840 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 101px -> id 652d043f8189094afee170f1|6bac70bb-5c81-d083-4e27-e562abbbc840 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.13 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -56px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 51px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-182 — devices_animation_design

Triggers:
- `e-640` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78245`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 28%
    - TRANSFORM_MOVE: x 50px, y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -50px, y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-183 — mobile_json_comp

Triggers:
- `e-574` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7888a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-727` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319a51`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-824` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763ed1`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 22%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 652d043f8189094afee170f1|735b36d9-f6ab-6962-ebfa-53d5535b2e74 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - PLUGIN_LOTTIE: lottie progress 97 -> id 652d043f8189094afee170f1|735b36d9-f6ab-6962-ebfa-53d5535b2e74 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 44%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 652d043f8189094afee170f1|4bbf5b66-ba9a-17e8-fbb9-d0135864b62e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 652d043f8189094afee170f1|4bbf5b66-ba9a-17e8-fbb9-d0135864b62e (duration 500ms, delay 0ms, easing lineair/geen)

### a-184 — flower_2

Triggers:
- `e-652` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78291`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 2%
    - TRANSFORM_MOVE: x -800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y -600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y -600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y 600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y 600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 1200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateX nulldeg, rotateY nulldeg, rotateZ 0deg -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 399px -> {} (duration 500ms, delay 0ms, easing 0.076,0.001,0.298,0.989)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.75,0.75)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -191px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -191px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.316,0.989)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 49%
    - TRANSFORM_MOVE: y 500px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 500px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.304,0.989)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 61%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: x nullpx, y 500px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_ROTATE: rotateZ 1000deg -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-185 — animation_design_elements_1440

Triggers:
- `e-557` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78188`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 17%
    - TRANSFORM_MOVE: x -132px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601ef (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -427px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 24px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 18px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: x -132px, y -150px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -100px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601ef (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -70px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -70px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -70px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 100%
    - TRANSFORM_MOVE: y -800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-186 — 🔵 Brands Scroll

Triggers:
- `e-658` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c786b7`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - TRANSFORM_MOVE: y 100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - TRANSFORM_MOVE: y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - TRANSFORM_MOVE: y 100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-187 — mobile_app

Triggers:
- `e-626` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78184`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-746` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31934b`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-768` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917b9`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`

### a-188 — bg_black_our_works

Triggers:
- `e-594` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78333`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 27%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 0.1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-189 — New Scroll Animation 2

Triggers:
- `e-599` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78864`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 25%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 0 -> id 652d043f8189094afee170f1|70d9d6e1-e674-f1ca-41c7-8fa9b586681d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> id 652d043f8189094afee170f1|70d9d6e1-e674-f1ca-41c7-8fa9b586681d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66%
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> id 652d043f8189094afee170f1|70d9d6e1-e674-f1ca-41c7-8fa9b586681d (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> id 652d043f8189094afee170f1|70d9d6e1-e674-f1ca-41c7-8fa9b586681d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 73%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 652d043f8189094afee170f1|38270b58-8a56-bc84-713b-2518c64bbd4c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 87%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 652d043f8189094afee170f1|38270b58-8a56-bc84-713b-2518c64bbd4c (duration 500ms, delay 0ms, easing lineair/geen)

### a-190 — branding_logo 5

Triggers:
- `e-653` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7858a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-808` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9648`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df966f (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.001%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df966f (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.002%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df966f (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.003%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df966f (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964c (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0% -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -25% -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df964a (duration 500ms, delay 0ms, easing lineair/geen)

### a-191 — brand_elements_move

Triggers:
- `e-561` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78634`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-192 — New_scroll_up 2

Triggers:
- `e-579` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78801`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - STYLE_SIZE: height 100% -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 54%
    - STYLE_SIZE: height 0% -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-193 — animation_text_opacity

Triggers:
- `e-615` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781ff`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-194 — dashboard_black

Triggers:
- `e-598` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78180`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -141px -> id 652d043f8189094afee170eb|acb73fe5-eb49-4200-f664-91b84503a046 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 1%
    - TRANSFORM_MOVE: x -141px -> id 652d043f8189094afee170eb|acb73fe5-eb49-4200-f664-91b84503a046 (duration 500ms, delay 0ms, easing lineair/geen)

### a-195 — gallery_brand_card

Triggers:
- `e-643` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7867d`; offsets `niet expliciet`; media `main`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 23%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|a8e136a2-1c71-7443-560c-ffceb9dec7b5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|044e5540-a7b9-c8ac-c221-49d8e99ce66e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|621c3089-00c4-696c-7c49-0d5724eb7727 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|16e56bd5-4e14-1258-7442-527e192c2195 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|cb0fdaae-a6f7-783b-d9c5-1d3b02c5bb6d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|d6664faf-f303-383f-53f6-ef58ecb8eefd (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|a8e136a2-1c71-7443-560c-ffceb9dec7b5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|044e5540-a7b9-c8ac-c221-49d8e99ce66e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|621c3089-00c4-696c-7c49-0d5724eb7727 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|16e56bd5-4e14-1258-7442-527e192c2195 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|cb0fdaae-a6f7-783b-d9c5-1d3b02c5bb6d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|d6664faf-f303-383f-53f6-ef58ecb8eefd (duration 500ms, delay 0ms, easing lineair/geen)

### a-196 — second_line_animation

Triggers:
- `e-620` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7817f`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 4%
    - TRANSFORM_MOVE: x -32px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 6%
    - TRANSFORM_MOVE: y 35px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - TRANSFORM_MOVE: y -80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -32px, y -80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-197 — animation_text_opacity 2

Triggers:
- `e-618` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781ff`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 16%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 37%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-198 — faq open 2

Triggers:
- `e-559` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784a0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-560` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7877a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-564` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784e0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-565` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78973`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-567` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789b3`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-571` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789c7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-572` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7878e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-578` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784ea`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-584` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789d1`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-585` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787b0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-587` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78991`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-590` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784fe`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-593` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78987`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-596` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78496`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-597` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787d8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-601` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784d6`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-603` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784aa`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-610` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787ba`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-616` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787ce`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-621` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787a4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-622` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789bd`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-623` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787c4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-631` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789a9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-633` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787e2`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-634` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7897d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-636` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784c0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-637` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7899d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-645` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78784`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-648` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78798`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-650` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784cc`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-654` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784b4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-657` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784f4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-659` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789db`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_SIZE: height 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1 — stagger ca. 300ms
  - STYLE_SIZE: config -> {} (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 180deg -> selector .plus-faq (duration 200ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> {} (duration 200ms, delay 300ms, easing lineair/geen)

### a-199 — dashboard_white

Triggers:
- `e-562` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7816f`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 89%
    - TRANSFORM_MOVE: y -120px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 92%
    - TRANSFORM_MOVE: x -150px, y -300px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -400px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 93%
    - TRANSFORM_MOVE: y -120px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 94%
    - TRANSFORM_MOVE: y -80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 95%
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 97%
    - TRANSFORM_MOVE: y -80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 99%
    - TRANSFORM_MOVE: y -120px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-200 — open_popup

Triggers:
- `e-600` `MOUSE_CLICK` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7884c`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-683` `MOUSE_CLICK` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319a13`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-819` `MOUSE_CLICK` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e93`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - GENERAL_DISPLAY: display flex -> selector .modul_popup (duration 0ms, delay 0ms, easing lineair/geen)

### a-201 — Devices scroll desktop

Triggers:
- `e-558` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781b2`; offsets `niet expliciet`; media `main`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - TRANSFORM_MOVE: y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 80px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y -100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - TRANSFORM_MOVE: y -100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-202 — 🔵 Brands Scroll 2

Triggers:
- `e-566` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c786d1`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - TRANSFORM_MOVE: y 100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - TRANSFORM_MOVE: y 50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: y 100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-203 — branding_logo 7

Triggers:
- `e-632` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c785dc`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> {} (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e6 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.001%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e6 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.002%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca7c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.003%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca7c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -41px -> id 652d043f8189094afee170de|6c774f68-a787-e7cb-0a42-7b18705dca57 (duration 500ms, delay 0ms, easing lineair/geen)

### a-204 — Position_second_line_1440

Triggers:
- `e-606` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7819a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -133px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -92px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -63px, y -2px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -52px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 93px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601f2 (duration 500ms, delay 0ms, easing lineair/geen)

### a-205 — Devices scroll tablet

Triggers:
- `e-641` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781b2`; offsets `niet expliciet`; media `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -50px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -100px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-206 — faq open close 2

Triggers:
- `e-563` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7877a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-569` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784cc`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-570` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789b3`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-573` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78973`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-575` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789d1`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-577` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789a9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-580` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789c7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-581` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784fe`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-582` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787c4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-583` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784d6`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-588` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787b0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-589` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78798`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-591` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784e0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-595` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784c0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-607` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7897d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-608` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787a4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-609` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787d8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-611` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789db`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-612` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787e2`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-617` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784b4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-619` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c789bd`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-625` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78784`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-627` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78987`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-635` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784f4`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-638` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787ba`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-642` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784aa`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-644` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c787ce`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-646` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78496`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-649` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7899d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-651` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784a0`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-655` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7878e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-656` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78991`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-660` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c784ea`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 — stagger ca. 300ms
  - STYLE_OPACITY: opacity 0 -> {} (duration 300ms, delay 0ms, easing lineair/geen)
  - STYLE_SIZE: height 0px -> {} (duration 500ms, delay 300ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 200ms, delay 300ms, easing lineair/geen)

### a-207 — Hero_dev_animation

Triggers:
- `e-624` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78811`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 32%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|b368a438-38dc-39cc-d9b6-216afc225b22 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|b368a438-38dc-39cc-d9b6-216afc225b22 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 63%
    - TRANSFORM_MOVE: y -2000px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-208 — mobile_scroll_animation

Triggers:
- `e-604` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c782d3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 14%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 26%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.002%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.003%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 41%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 44%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.002%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.003%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 59%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.002%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.003%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 73%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 74%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 76%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.002%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.003%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 84%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)

### a-209 — Devices scroll phone

Triggers:
- `e-613` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781b2`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -30px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-210 — New Scroll Animation 3

Triggers:
- `e-614` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78612`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 32%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - STYLE_OPACITY: opacity 0.2 -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-211 — branding_logo 3

Triggers:
- `e-629` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78524`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 8%
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 652d043f8189094afee170de|72db75b7-1271-5607-8abd-0af6787a566a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 13%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.6, scaleY 0.6 -> id 652d043f8189094afee170de|72db75b7-1271-5607-8abd-0af6787a566a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -22px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.001%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.002%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.003%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - TRANSFORM_MOVE: y 1500px -> id 652d043f8189094afee170de|ea2e1b6f-1740-a6af-1a71-d507ac550298 (duration 500ms, delay 0ms, easing 0.386,0.1,0.216,0.989)
  - Keyframe 41%
    - TRANSFORM_SCALE: scaleX 0.2, scaleY 0.2 -> id 652d043f8189094afee170de|72db75b7-1271-5607-8abd-0af6787a566a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.304,0.989)
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 54%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 60%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 61%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 62%
    - TRANSFORM_MOVE: y 1500px -> {} (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|ea2e1b6f-1740-a6af-1a71-d507ac550298 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -22px, y -112px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 79%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 85%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-212 — mobile_day_night

Triggers:
- `e-568` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78871`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-743` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319a38`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-823` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb8`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763ed0 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763ed0 (duration 500ms, delay 0ms, easing lineair/geen)

### a-213 — New Scroll Animation 4

Triggers:
- `e-592` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78255`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 2%
    - TRANSFORM_MOVE: x -800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 800px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y -600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y -600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y 600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y 600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 12%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 1200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateX nulldeg, rotateY nulldeg, rotateZ 0deg -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 399px -> id 652d043f8189094afee170eb|aa7b86f5-9b99-5bfa-1996-fe5b4c8f4c86 (duration 500ms, delay 0ms, easing 0.076,0.001,0.298,0.989)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|ce0a4902-0a35-6a43-edd5-b8f9fc062f3c (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|aa7b86f5-9b99-5bfa-1996-fe5b4c8f4c86 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|aa7b86f5-9b99-5bfa-1996-fe5b4c8f4c86 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - TRANSFORM_MOVE: y -278px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -302px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|aa7b86f5-9b99-5bfa-1996-fe5b4c8f4c86 (duration 500ms, delay 0ms, easing 0.25,0.25,0.75,0.75)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|ce0a4902-0a35-6a43-edd5-b8f9fc062f3c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|f3216017-5437-9941-2ae2-5ae2f2562934 (duration 500ms, delay 0ms, easing 0.25,0.25,0.316,0.989)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|ce0a4902-0a35-6a43-edd5-b8f9fc062f3c (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|67ebfe84-49a3-d143-a95c-6faa7d366ec2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|f3216017-5437-9941-2ae2-5ae2f2562934 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|f3216017-5437-9941-2ae2-5ae2f2562934 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|f3216017-5437-9941-2ae2-5ae2f2562934 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|ce0a4902-0a35-6a43-edd5-b8f9fc062f3c (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|67ebfe84-49a3-d143-a95c-6faa7d366ec2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 49%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|14666d86-2d6f-40ae-89fe-867c2906ae2b (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|67ebfe84-49a3-d143-a95c-6faa7d366ec2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|2e8cefe2-effa-119a-11d6-96dcb6dbabc7 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|14666d86-2d6f-40ae-89fe-867c2906ae2b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|14666d86-2d6f-40ae-89fe-867c2906ae2b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|14666d86-2d6f-40ae-89fe-867c2906ae2b (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|67ebfe84-49a3-d143-a95c-6faa7d366ec2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|2e8cefe2-effa-119a-11d6-96dcb6dbabc7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|bb762b71-defc-cfc5-9b4d-c6e354eeab61 (duration 500ms, delay 0ms, easing 0.25,0.25,0.304,0.989)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|2e8cefe2-effa-119a-11d6-96dcb6dbabc7 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|7ddc08c8-1774-029d-bee8-2c43c5144dc2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|bb762b71-defc-cfc5-9b4d-c6e354eeab61 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 61%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|bb762b71-defc-cfc5-9b4d-c6e354eeab61 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|bb762b71-defc-cfc5-9b4d-c6e354eeab61 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|2e8cefe2-effa-119a-11d6-96dcb6dbabc7 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|7ddc08c8-1774-029d-bee8-2c43c5144dc2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: x nullpx, y 500px -> {} (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|7ddc08c8-1774-029d-bee8-2c43c5144dc2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|c5fcf9fd-726f-7d05-df43-2e0d1834d8af (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|7ddc08c8-1774-029d-bee8-2c43c5144dc2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|c5fcf9fd-726f-7d05-df43-2e0d1834d8af (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_ROTATE: rotateZ 1000deg -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-214 — json_dev_writ

Triggers:
- `e-602` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7882e`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 29%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 652d043f8189094afee170f1|adb92698-e343-b452-3bba-aeaf2240fca8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - TRANSFORM_MOVE: y 443px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 1000px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 59%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing ease)
  - Keyframe 60%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 652d043f8189094afee170f1|adb92698-e343-b452-3bba-aeaf2240fca8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing ease)
  - Keyframe 67%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-215 — pixel_animation_text

Triggers:
- `e-628` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c7820a`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_FILTER: filter undefined -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-216 — effect_slide

Triggers:
- `e-576` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c781cc`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 1%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|55d87ffe-5d3b-7672-2556-b0d12a23ff8e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|55d87ffe-5d3b-7672-2556-b0d12a23ff8e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 3%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|f97d21e3-ba2d-a264-7869-f960d6b54a53 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 4%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|f97d21e3-ba2d-a264-7869-f960d6b54a53 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 5%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|24236861-f93b-a388-be51-409ba81c69a1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 6%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|24236861-f93b-a388-be51-409ba81c69a1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 7%
    - TRANSFORM_SCALE: scaleX 1.3, scaleY 1.3 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|6edf9a35-08cb-de27-97d1-d2213aa46126 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 8%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|6edf9a35-08cb-de27-97d1-d2213aa46126 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 12%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 15%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|fc0a2f72-3e1c-d220-bcd2-623b64f88ea7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> id 652d043f8189094afee170eb|fc0a2f72-3e1c-d220-bcd2-623b64f88ea7 (duration 500ms, delay 0ms, easing 0.23,1,0.32,1)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|fc0a2f72-3e1c-d220-bcd2-623b64f88ea7 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - TRANSFORM_MOVE: y -1600px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - STYLE_OPACITY: opacity 0.7 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 85px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - TRANSFORM_MOVE: y -1000px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|fc0a2f72-3e1c-d220-bcd2-623b64f88ea7 (duration 500ms, delay 0ms, easing ease)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 98%
    - TRANSFORM_MOVE: y -200px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-217 — вфырищфкв

Triggers:
- `e-605` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|3ff76723-c7d9-8a05-1e87-ca3074c78186`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-701` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31934d`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-769` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917bb`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`

### a-218 — branding_logo 8

Triggers:
- `e-669` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319728`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|f3ae9c36-384c-85f6-4584-1e4be832a4b7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|f3ae9c36-384c-85f6-4584-1e4be832a4b7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-130.block_130_1440 (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - TRANSFORM_MOVE: y 0% -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing ease)
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-130.block_130_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -32% -> selector .animation_blur_logo-2.animation_blur_1440 (duration 500ms, delay 0ms, easing lineair/geen)

### a-219 — branding_logo 9

Triggers:
- `e-761` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31977a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-809` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9671`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27%
    - STYLE_OPACITY: opacity 1 -> selector .heading-42 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.001%
    - STYLE_OPACITY: opacity 0 -> selector .heading-42 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.002%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27.003%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|2117ab96-c42d-f5a8-85c1-2250cc8e10e8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-130.block_130_mobile (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0px -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.08, scaleY 0.08 -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-130.block_130_mobile (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -224px -> selector .animation_blur_logo-2.animation_blur_mobile (duration 500ms, delay 0ms, easing lineair/geen)

### a-220 — front_back_animation 2

Triggers:
- `e-671` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319a15`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-821` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e95`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0.13 -> selector .mob_back (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .mob_front (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .mob_back (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .mob_front (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 26%
    - STYLE_OPACITY: opacity 0.13 -> selector .title_dev_frontend (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .title_dev_frontend (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e9e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e9e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - STYLE_OPACITY: opacity 1 -> selector .title_dev_frontend (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -101px -> selector .title_dev_frontend (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.13 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e9e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 101px -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e9e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_OPACITY: opacity 1 -> selector .mob_back (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.13 -> selector .mob_front (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -56px -> selector .mob_back (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 51px -> selector .mob_front (duration 500ms, delay 0ms, easing lineair/geen)

### a-221 — devices_animation_design 2

Triggers:
- `e-678` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31940c`; offsets `niet expliciet`; media `main`, `medium`
- `e-779` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499187a`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 28%
    - TRANSFORM_MOVE: x 50px, y 50px -> selector .div-block-275 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -50px, y 50px -> selector .div-block-274 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: x 0px, y 0px -> selector .div-block-275 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> selector .div-block-274 (duration 500ms, delay 0ms, easing lineair/geen)

### a-222 — flower_2 2

Triggers:
- `e-710` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319458`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-781` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c6`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 2%
    - TRANSFORM_MOVE: x -800px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 800px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cb (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y -600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cd (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y -600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cf (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y 600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y 600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-190 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cb (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cd (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918cf (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateX nulldeg, rotateY nulldeg, rotateZ 0deg -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d5 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d6 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 399px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918da (duration 500ms, delay 0ms, easing 0.076,0.001,0.298,0.989)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991903 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918da (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 32%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d6 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918da (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918da (duration 500ms, delay 0ms, easing 0.25,0.25,0.75,0.75)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991903 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -191px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -191px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918d5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918e3 (duration 500ms, delay 0ms, easing 0.25,0.25,0.316,0.989)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991903 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991904 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918e3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918e3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918e3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991903 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991904 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 49%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918eb (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991904 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991905 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918eb (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918eb (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918eb (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991904 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991905 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918f3 (duration 500ms, delay 0ms, easing 0.25,0.25,0.304,0.989)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991905 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991906 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918f3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 61%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918f3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918f3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991905 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991906 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: x nullpx, y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918fb (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991906 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991907 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918fb (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918fb (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918fb (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991906 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991907 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_ROTATE: rotateZ 1000deg -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-190 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-223 — animation_design_elements_1440 2

Triggers:
- `e-712` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31934f`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-770` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917bd`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 17%
    - TRANSFORM_MOVE: x -132px, y 0px -> selector .div-block-108._1_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-109._2_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601ef (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-103._3_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-104._4_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-105._6_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> selector .div-block-107._5_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -427px -> selector .div-block-91._8_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 24px -> selector .div-block-110._9_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 18px -> selector .div-block-112._11_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: x -132px, y -150px -> selector .div-block-108._1_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -100px -> selector .div-block-109._2_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -100px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601ef (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -70px -> selector .div-block-103._3_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -70px -> selector .div-block-104._4_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -70px -> selector .div-block-105._6_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-110._9_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-112._11_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 100%
    - TRANSFORM_MOVE: y -800px -> selector .div-block-107._5_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -800px -> selector .div-block-91._8_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)

### a-224 — 🔵 Brands Scroll 3

Triggers:
- `e-663` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31987e`; offsets `niet expliciet`; media `main`, `medium`, `small`
- `e-814` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9775`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - TRANSFORM_MOVE: y 100px -> selector .div-block-672 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> selector .div-block-673 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - TRANSFORM_MOVE: y 50px -> selector .div-block-674 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-672 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_MOVE: y 200px -> selector .div-block-675 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - TRANSFORM_MOVE: y 100px -> selector .div-block-677 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-673 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 200px -> selector .div-block-678 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-674 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-677 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .div-block-680 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-675 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - TRANSFORM_MOVE: y 200px -> selector .div-block-679 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-678 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .div-block-681 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-680 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-679 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-681 (duration 500ms, delay 0ms, easing lineair/geen)

### a-225 — bg_black_our_works 2

Triggers:
- `e-692` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3194fa`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-783` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991968`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`

### a-226 — New Scroll Animation 5

Triggers:
- `e-721` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319a2b`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-822` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eab`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 25%
    - STYLE_OPACITY: opacity 1 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eae (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 0 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eae (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 27%
    - STYLE_OPACITY: opacity 0 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eae (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66%
    - TRANSFORM_SCALE: scaleX 1.5, scaleY 1.5 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb7 (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eae (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 87%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763eb7 (duration 500ms, delay 0ms, easing lineair/geen)

### a-227 — branding_logo 10

Triggers:
- `e-732` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319751`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|5b9c6e1f-ee47-cfe8-fcac-6abf79047bff (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.001%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|5b9c6e1f-ee47-cfe8-fcac-6abf79047bff (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.002%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170de|5b9c6e1f-ee47-cfe8-fcac-6abf79047c01 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.003%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170de|5b9c6e1f-ee47-cfe8-fcac-6abf79047c01 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-130.block_130_1280 (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0% -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-130.block_130_1280 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -29% -> selector .animation_blur_logo-2.animation_blur_1280 (duration 500ms, delay 0ms, easing lineair/geen)

### a-228 — brand_elements_move 2

Triggers:
- `e-691` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3197fb`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-812` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96f2`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 1 -> selector .brand_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> selector .brand_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 1 -> selector .brand_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - STYLE_OPACITY: opacity 1 -> selector .brand_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - STYLE_OPACITY: opacity 1 -> selector .brand_5 (duration 500ms, delay 0ms, easing lineair/geen)

### a-229 — New_scroll_up 3

Triggers:
- `e-689` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3199c8`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 25%
    - STYLE_SIZE: height 100% -> selector .div-block-342 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_SIZE: height 0% -> selector .div-block-342 (duration 500ms, delay 0ms, easing lineair/geen)

### a-230 — animation_text_opacity 3

Triggers:
- `e-696` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3193c6`; offsets `niet expliciet`; media `main`, `medium`, `small`
- `e-777` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991834`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_desogn_1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_desogn_1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_4 (duration 500ms, delay 0ms, easing lineair/geen)

### a-231 — dashboard_black 2

Triggers:
- `e-698` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319347`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-767` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917b5`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -141px -> id 652d043f8189094afee170eb|acb73fe5-eb49-4200-f664-91b84503a046 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 1%
    - TRANSFORM_MOVE: x -141px -> id 652d043f8189094afee170eb|acb73fe5-eb49-4200-f664-91b84503a046 (duration 500ms, delay 0ms, easing lineair/geen)

### a-232 — gallery_brand_card 2

Triggers:
- `e-747` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319844`; offsets `niet expliciet`; media `main`
- `e-813` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df973b`; offsets `niet expliciet`; media `main`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 23%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|a8e136a2-1c71-7443-560c-ffceb9dec7b5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|044e5540-a7b9-c8ac-c221-49d8e99ce66e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|621c3089-00c4-696c-7c49-0d5724eb7727 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|16e56bd5-4e14-1258-7442-527e192c2195 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|cb0fdaae-a6f7-783b-d9c5-1d3b02c5bb6d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170de|d6664faf-f303-383f-53f6-ef58ecb8eefd (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|a8e136a2-1c71-7443-560c-ffceb9dec7b5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|044e5540-a7b9-c8ac-c221-49d8e99ce66e (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|621c3089-00c4-696c-7c49-0d5724eb7727 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|16e56bd5-4e14-1258-7442-527e192c2195 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|cb0fdaae-a6f7-783b-d9c5-1d3b02c5bb6d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> id 652d043f8189094afee170de|d6664faf-f303-383f-53f6-ef58ecb8eefd (duration 500ms, delay 0ms, easing lineair/geen)

### a-233 — second_line_animation 2

Triggers:
- `e-685` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319346`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-766` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917b4`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: y 40px -> selector .div-block-110 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-111 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 4%
    - TRANSFORM_MOVE: x -32px, y 0px -> selector .div-block-112 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 6%
    - TRANSFORM_MOVE: y 35px -> selector .div-block-113 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - TRANSFORM_MOVE: y -80px -> selector .div-block-110 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -80px -> selector .div-block-111 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -32px, y -80px -> selector .div-block-112 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -50px -> selector .div-block-113 (duration 500ms, delay 0ms, easing lineair/geen)

### a-234 — animation_text_opacity 4

Triggers:
- `e-753` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3193c6`; offsets `niet expliciet`; media `tiny`
- `e-776` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991834`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_desogn_1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 16%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_desogn_1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 37%
    - STYLE_OPACITY: opacity 0 -> selector .heading-41.heading_design_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> selector .heading-41.heading_design_4 (duration 500ms, delay 0ms, easing lineair/geen)

### a-235 — faq open 3

Triggers:
- `e-664` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31995f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-665` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31965d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-666` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319693`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-670` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319977`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-672` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31996b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-682` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b7a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-686` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319981`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-688` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31969d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-694` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b84`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-700` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b70`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-703` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b58`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-704` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319671`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-706` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b3a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-707` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b44`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-708` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31998b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-713` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b64`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-714` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b8e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-719` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b4e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-720` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b98`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-723` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3199a9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-725` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196bb`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-733` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31994b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-737` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319687`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-740` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319995`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-742` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31967b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-744` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319667`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-749` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196b1`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-752` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31999f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-756` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319955`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-758` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196a7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-760` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319ba2`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-762` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196c5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-764` `DROPDOWN_OPEN` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319941`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-784` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991acb`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-786` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991ad5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-788` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991adf`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-790` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991ae9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-792` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991af5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-794` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b01`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-796` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b0b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-798` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b15`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-800` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b1f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-802` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b29`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-804` `DROPDOWN_OPEN` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b33`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_SIZE: height 0px -> selector .drop-list-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .faq-answer-p-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1 — stagger ca. 300ms
  - STYLE_SIZE: config -> selector .drop-list-2 (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 180deg -> selector .plus-faq (duration 200ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> selector .faq-answer-p-2 (duration 200ms, delay 300ms, easing lineair/geen)

### a-236 — dashboard_white 2

Triggers:
- `e-684` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319336`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-765` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917a4`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x -150px, y -114px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-109 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-107 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-91 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-103 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-104 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-105 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-106 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 89%
    - TRANSFORM_MOVE: y -120px -> selector .div-block-109 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 92%
    - TRANSFORM_MOVE: x -150px, y -300px -> id 652d043f8189094afee170eb|193d5996-3ba2-2992-6bc0-e668ff1488e1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -400px -> selector .div-block-91 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 93%
    - TRANSFORM_MOVE: y -120px -> selector .div-block-103 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 94%
    - TRANSFORM_MOVE: y -80px -> selector .div-block-104 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 95%
    - TRANSFORM_MOVE: y -500px -> selector .div-block-107 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 97%
    - TRANSFORM_MOVE: y -80px -> selector .div-block-105 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 99%
    - TRANSFORM_MOVE: y -120px -> selector .div-block-106 (duration 500ms, delay 0ms, easing lineair/geen)

### a-237 — Devices scroll desktop 2

Triggers:
- `e-736` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319379`; offsets `niet expliciet`; media `main`
- `e-774` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917e7`; offsets `niet expliciet`; media `main`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 15%
    - TRANSFORM_MOVE: y 50px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 50px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 80px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 50px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 100px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y -100px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - TRANSFORM_MOVE: y -100px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)

### a-238 — 🔵 Brands Scroll 4

Triggers:
- `e-718` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319898`; offsets `niet expliciet`; media `tiny`
- `e-815` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df978f`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 10%
    - TRANSFORM_MOVE: y 100px -> selector .div-block-672 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 150px -> selector .div-block-673 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - TRANSFORM_MOVE: y 50px -> selector .div-block-674 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-672 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_MOVE: y 200px -> selector .div-block-675 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - TRANSFORM_MOVE: y 200px -> selector .div-block-678 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: y 100px -> selector .div-block-677 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-673 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .div-block-680 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-674 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .div-block-679 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-675 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 200px -> selector .div-block-681 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-678 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-680 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-681 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-679 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-677 (duration 500ms, delay 0ms, easing lineair/geen)

### a-239 — branding_logo 11

Triggers:
- `e-734` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3197a3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-810` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 7%
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-130.block_130_mobile.block_130_mini (duration 500ms, delay 0ms, easing 0.398,0.106,0.322,0.989)
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96bf (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.001%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96bf (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.002%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96c1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38.003%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96c1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing ease)
  - Keyframe 75%
    - TRANSFORM_SCALE: scaleX 0.1, scaleY 0.1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-130.block_130_mobile.block_130_mini (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -41px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df969c (duration 500ms, delay 0ms, easing lineair/geen)

### a-240 — Position_second_line_1440 2

Triggers:
- `e-679` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319361`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-771` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917cf`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -133px -> selector .div-block-110._9_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -92px -> selector .div-block-111._10_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -63px, y -2px -> selector .div-block-112._11_image_1440 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -52px -> selector .div-block-113._12_image (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 93px -> id 652d043f8189094afee170eb|aacdf8ea-267b-a6a5-a519-9b8502e601f2 (duration 500ms, delay 0ms, easing lineair/geen)

### a-241 — Devices scroll tablet 2

Triggers:
- `e-674` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319379`; offsets `niet expliciet`; media `medium`
- `e-773` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917e7`; offsets `niet expliciet`; media `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - TRANSFORM_MOVE: y 30px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -50px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -100px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)

### a-242 — faq open close 3

Triggers:
- `e-661` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b4e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-662` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319671`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-667` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319ba2`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-668` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319995`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-673` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b7a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-675` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196a7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-676` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b64`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-680` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31965d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-687` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b8e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-690` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31969d`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-693` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b3a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-697` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319955`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-699` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31967b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-702` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3199a9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-709` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31998b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-711` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319693`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-715` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319981`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-716` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31994b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-717` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b44`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-722` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196c5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-724` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319941`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-726` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b70`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-731` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196bb`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-735` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196b1`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-738` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b98`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-739` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319687`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-745` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319667`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-748` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319977`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-750` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31995f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-751` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31996b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-754` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31999f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-755` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b84`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-757` `DROPDOWN_CLOSE` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319b58`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-785` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991acb`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-787` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991ad5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-789` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991adf`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-791` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991ae9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-793` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991af5`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-795` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b01`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-797` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b0b`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-799` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b15`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-801` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b1f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-803` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b29`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-805` `DROPDOWN_CLOSE` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991b33`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 — stagger ca. 300ms
  - STYLE_OPACITY: opacity 0 -> selector .faq-answer-p-2 (duration 300ms, delay 0ms, easing lineair/geen)
  - STYLE_SIZE: height 0px -> selector .drop-list-2 (duration 500ms, delay 300ms, easing ease)
  - TRANSFORM_ROTATE: rotateZ 0deg -> selector .plus-faq (duration 200ms, delay 300ms, easing lineair/geen)

### a-243 — Hero_dev_animation 2

Triggers:
- `e-681` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3199d8`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-817` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e58`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 32%
    - STYLE_OPACITY: opacity 1 -> selector .hero_text_title_dev (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|b368a438-38dc-39cc-d9b6-216afc225b22 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-155 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - STYLE_OPACITY: opacity 0 -> selector .hero_text_title_dev (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170f1|b368a438-38dc-39cc-d9b6-216afc225b22 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 63%
    - TRANSFORM_MOVE: y -2000px -> selector .div-block-155 (duration 500ms, delay 0ms, easing lineair/geen)

### a-244 — mobile_scroll_animation 2

Triggers:
- `e-728` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31949a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-782` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991908`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 14%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 26%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|80eb03e8-47d4-9857-c9a0-f0ab8de61db8 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.001%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.002%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35.003%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 41%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 44%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|0a20d8b3-6376-4d11-c558-7efa224eeb0c (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.001%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.002%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51.003%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 59%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|5a2ea2b8-e93a-6b2e-a357-8b6cea88ba5d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.001%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.002%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66.003%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 73%
    - TRANSFORM_MOVE: y 500px -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 74%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 76%
    - TRANSFORM_MOVE: y -500px -> id 652d043f8189094afee170eb|28c7b586-549c-d332-8404-a5917c248b02 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.001%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-192 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.002%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83.003%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-191 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 84%
    - TRANSFORM_MOVE: y 0px -> id 652d043f8189094afee170eb|bcee003a-fb98-238d-c7bc-9c48df1b2a6b (duration 500ms, delay 0ms, easing lineair/geen)

### a-245 — Devices scroll phone 2

Triggers:
- `e-695` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319379`; offsets `niet expliciet`; media `tiny`
- `e-772` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49917e7`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - TRANSFORM_MOVE: y 30px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 30px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 40px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 60px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_8 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_MOVE: y -20px -> selector .device_block_7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> selector .device_block_3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -30px -> selector .device_block_down_2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 80%
    - TRANSFORM_MOVE: y -30px -> selector .device_block_4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20px -> selector .device_block_5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .device_block_down_3 (duration 500ms, delay 0ms, easing lineair/geen)

### a-246 — New Scroll Animation 6

Triggers:
- `e-759` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3197d9`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-811` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df96d0`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 32%
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_identity (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 1 -> selector .brand_identity (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - STYLE_OPACITY: opacity 1 -> selector .brand_identity (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_book (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_identity (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .brand_book (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> selector .brand_book (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_logotype (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_book (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .brand_logotype (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - STYLE_OPACITY: opacity 1 -> selector .brand_logotype (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.2 -> selector .prome_materials (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - STYLE_OPACITY: opacity 0.2 -> selector .brand_logotype (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .prome_materials (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - STYLE_OPACITY: opacity 1 -> selector .prome_materials (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - STYLE_OPACITY: opacity 0.2 -> selector .prome_materials (duration 500ms, delay 0ms, easing lineair/geen)

### a-247 — branding_logo 12

Triggers:
- `e-729` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3196eb`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-806` `SCROLLING_IN_VIEW` target `id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e2`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 8%
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95da (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 13%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95da (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 19%
    - STYLE_FILTER: filter undefined -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.6, scaleY 0.6 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -22px, y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df961b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.001%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df961b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.002%
    - STYLE_OPACITY: opacity 0 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df961d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 23.003%
    - STYLE_OPACITY: opacity 1 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df961d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 24%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df960d (duration 500ms, delay 0ms, easing 0.386,0.1,0.216,0.989)
  - Keyframe 41%
    - TRANSFORM_SCALE: scaleX 0.2, scaleY 0.2 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9609 (duration 500ms, delay 0ms, easing 0.398,0.095,0.304,0.989)
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9610 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 54%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9614 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9602 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9604 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 60%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9612 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 61%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df960b (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 62%
    - TRANSFORM_MOVE: y 1500px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9606 (duration 500ms, delay 0ms, easing 0.398,0.095,0.31,0.989)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df960d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.4, scaleY 0.4 -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -22px, y -112px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df95e4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 72%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9609 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9610 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9614 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9602 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9604 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 79%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9612 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df960b (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 85%
    - TRANSFORM_MOVE: y 0px -> id 66c6f87af99901dda5bf4bf8|d6c716be-4591-06b5-349b-01f1a5df9606 (duration 500ms, delay 0ms, easing lineair/geen)

### a-248 — New Scroll Animation 7

Triggers:
- `e-741` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d31941c`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-780` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188a`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 2%
    - TRANSFORM_MOVE: x -800px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 800px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188f (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y -600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991891 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y -600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991893 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x -390px, y 600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991895 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 390px, y 600px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991897 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 10%
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 12%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 1200px -> selector .div-block-190 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189a (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - TRANSFORM_MOVE: x 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188d (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188f (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991891 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991893 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991895 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0px, y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991897 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateX nulldeg, rotateY nulldeg, rotateZ 0deg -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189a (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991899 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 31%
    - STYLE_OPACITY: opacity 0 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 399px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189d (duration 500ms, delay 0ms, easing 0.076,0.001,0.298,0.989)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189d (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - TRANSFORM_MOVE: y -278px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -302px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991899 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 39%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499189d (duration 500ms, delay 0ms, easing 0.25,0.25,0.75,0.75)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918a5 (duration 500ms, delay 0ms, easing 0.25,0.25,0.316,0.989)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918a5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918a5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918a5 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 49%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ac (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ac (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ac (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 57%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ac (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c2 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918b3 (duration 500ms, delay 0ms, easing 0.25,0.25,0.304,0.989)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918b3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 61%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918b3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918b3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - TRANSFORM_MOVE: x nullpx, y 500px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ba (duration 500ms, delay 0ms, easing 0.25,0.25,0.31,0.995)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c5 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ba (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ba (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918ba (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f49918c5 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 82%
    - TRANSFORM_ROTATE: rotateZ 1000deg -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499188c (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-190 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-249 — json_dev_writ 2

Triggers:
- `e-705` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3199f5`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-818` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e75`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 29%
    - PLUGIN_LOTTIE: lottie progress 0 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e81 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 36%
    - TRANSFORM_MOVE: y 443px -> selector .title_dev_transition (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 58%
    - TRANSFORM_MOVE: y 1000px -> {} (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 59%
    - STYLE_OPACITY: opacity 0 -> selector .title_dev_transition (duration 500ms, delay 0ms, easing ease)
  - Keyframe 60%
    - PLUGIN_LOTTIE: lottie progress 99 -> id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e81 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - STYLE_OPACITY: opacity 1 -> selector .title_dev_transition (duration 500ms, delay 0ms, easing ease)
  - Keyframe 67%
    - TRANSFORM_MOVE: y 0px -> selector .title_dev_transition (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - TRANSFORM_MOVE: y 0px -> {} (duration 500ms, delay 0ms, easing lineair/geen)

### a-250 — pixel_animation_text 2

Triggers:
- `e-677` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d3193d1`; offsets `niet expliciet`; media `main`, `medium`
- `e-778` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f499183f`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_FILTER: filter undefined -> selector .heading-18 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_FILTER: filter undefined -> selector .heading-18 (duration 500ms, delay 0ms, easing lineair/geen)

### a-251 — effect_slide 2

Triggers:
- `e-763` `SCROLLING_IN_VIEW` target `id 66c6db5981004c94bd27afbf|a00f81a7-a999-c68e-11e3-099e8d319393`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-775` `SCROLLING_IN_VIEW` target `id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991801`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 1%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|55d87ffe-5d3b-7672-2556-b0d12a23ff8e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 2%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|55d87ffe-5d3b-7672-2556-b0d12a23ff8e (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 3%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|f97d21e3-ba2d-a264-7869-f960d6b54a53 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 4%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|f97d21e3-ba2d-a264-7869-f960d6b54a53 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 5%
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|24236861-f93b-a388-be51-409ba81c69a1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 6%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|24236861-f93b-a388-be51-409ba81c69a1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 7%
    - TRANSFORM_SCALE: scaleX 1.3, scaleY 1.3 -> selector .div-block-206 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> id 652d043f8189094afee170eb|6edf9a35-08cb-de27-97d1-d2213aa46126 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 8%
    - STYLE_OPACITY: opacity 1 -> id 652d043f8189094afee170eb|6edf9a35-08cb-de27-97d1-d2213aa46126 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 12%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-369 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-369 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 15%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-369 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-204 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 30%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-28.new_animation_text.design_paragraph (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-99 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 600px -> selector .div-block-28.new_animation_text.design_paragraph (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -500px -> selector .div-block-369 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - STYLE_OPACITY: opacity 0 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991826 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 20px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991826 (duration 500ms, delay 0ms, easing 0.23,1,0.32,1)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991826 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .div-block-28.new_animation_text.design_paragraph (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 42%
    - TRANSFORM_MOVE: y -1600px -> selector .div-block-204 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - TRANSFORM_MOVE: y 0px -> selector .div-block-28.new_animation_text.design_paragraph (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0px -> selector .div-block-207 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - STYLE_OPACITY: opacity 0.7 -> selector .div-block-99 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 1 -> selector .div-block-207 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 85px -> selector .div-block-29 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .div-block-29 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .lottie_bl (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 0 -> selector .lottie-animation-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .div-block-99 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .div-block-29 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 0 -> selector .div-block-207 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .lottie_bl (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .div-block-29 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - TRANSFORM_MOVE: y -1000px -> selector .div-block-207 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 83%
    - TRANSFORM_MOVE: y 0px -> id 66c6defc2affcc6502ca5d13|f56e37f0-0970-93cd-42fe-8235f4991826 (duration 500ms, delay 0ms, easing ease)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .div-block-206 (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> selector .lottie-animation-6 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 98%
    - TRANSFORM_MOVE: y -200px -> selector .div-block-29 (duration 500ms, delay 0ms, easing lineair/geen)

### a-252 — New Scroll Animation

Triggers:
- `e-847` `SCROLLING_IN_VIEW` target `id 66c708476a87c7e9109c4a15|e883c53b-0c95-36c8-c41c-4a8555763e48`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 35%
    - STYLE_SIZE: height 70% -> selector .div-block-342 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_SIZE: height 0% -> selector .div-block-342 (duration 500ms, delay 0ms, easing lineair/geen)

### a-253 — close_modal

Triggers:
- `e-850` `MOUSE_CLICK` target `id 66c708476a87c7e9109c4a15|9001f9be-5d6b-8871-572b-df7b811805c7`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - GENERAL_DISPLAY: display none -> selector .modul_popup (duration 0ms, delay 0ms, easing lineair/geen)

### a-254 — close_popup

Triggers:
- `e-852` `MOUSE_CLICK` target `id 66c708476a87c7e9109c4a15|9001f9be-5d6b-8871-572b-df7b811805cc`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - GENERAL_DISPLAY: display none -> selector .modul_popup (duration 0ms, delay 0ms, easing lineair/geen)

### a-255 — Load

Triggers:
- `e-870` `PAGE_START` target `id 667d08f328f2df2d222670d1`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_OPACITY: opacity 0 -> id 667d08f328f2df2d222670d1|c7ebdd10-96e6-6f07-0a53-6faa50d08234 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> id 667d08f328f2df2d222670d1|3c46ffd5-4000-c744-b844-96cae5abe570 (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> id 667d08f328f2df2d222670d1|1218a009-69e9-a08b-f66c-3ae591f8231a (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> id 667d08f328f2df2d222670d1|0a812902-6ae6-6151-13ca-f85ba6a258ca (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|c7ebdd10-96e6-6f07-0a53-6faa50d08234 (duration 0ms, delay 100ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|3c46ffd5-4000-c744-b844-96cae5abe570 (duration 0ms, delay 100ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|0a812902-6ae6-6151-13ca-f85ba6a258ca (duration 0ms, delay 100ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> id 667d08f328f2df2d222670d1|1218a009-69e9-a08b-f66c-3ae591f8231a (duration 0ms, delay 100ms, easing lineair/geen)

### a-256 — about-6 2

Triggers:
- `e-868` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|68aca963-cbdb-f57e-95d9-d192b9868ab2`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 8%
    - STYLE_OPACITY: opacity 0 -> selector .text-vawes (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 5rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 14%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 20%
    - STYLE_OPACITY: opacity 1 -> selector .text-vawes (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 21%
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 22%
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -12deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 22.2%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0rem -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -12deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 25%
    - TRANSFORM_MOVE: y 0rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 28%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 34%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 35%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 40%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - TRANSFORM_MOVE: x 0vw, y -30rem -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 16deg -> selector .value-card.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -8deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -10rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0rem -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 47%
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 51%
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - TRANSFORM_ROTATE: rotateZ -4deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0.5 -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 62%
    - TRANSFORM_ROTATE: rotateZ -16deg -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y -30rem -> selector .value-card.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 0vw, y 0rem -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -17rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 65%
    - STYLE_OPACITY: opacity 1 -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 0deg -> selector .value-card.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 69%
    - STYLE_OPACITY: opacity 0 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 75%
    - STYLE_OPACITY: opacity 1 -> selector .bot-text.set4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 78%
    - TRANSFORM_MOVE: x 0vw, y -30rem -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_ROTATE: rotateZ 16deg -> selector .value-card.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -25rem -> selector .bot-text-wrapper (duration 500ms, delay 0ms, easing lineair/geen)

### a-257 — New Scroll Animation 8

Triggers:
- `e-869` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|2a8753b8-3b85-8b9c-c07b-1f7ef622e640`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 20%
    - STYLE_OPACITY: opacity 0 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 52%
    - STYLE_OPACITY: opacity 1 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - STYLE_OPACITY: opacity 0 -> selector .height-cases (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 70%
    - STYLE_OPACITY: opacity 1 -> selector .height-cases (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 76%
    - STYLE_OPACITY: opacity 0 -> selector .case--new-heading (duration 500ms, delay 0ms, easing lineair/geen)

### a-258 — New Timed Animation

Triggers:
- `e-872` `SCROLL_INTO_VIEW` target `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c6a5`; offsets `scrollOffsetValue: 20, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_OPACITY: opacity 0 -> selector .heading-3.max-w-82.color-black (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - STYLE_OPACITY: opacity 1 -> selector .heading-3.max-w-82.color-black (duration 1300ms, delay 0ms, easing ease)

### a-259 — hero-scroll-july vsr-2 5

Triggers:
- `e-876` `SCROLLING_IN_VIEW` target `id 667d08f328f2df2d222670d1|8579ced5-bb5c-a59c-9a98-4b378ead2465`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 53%
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .hero-paralax.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 85%
    - TRANSFORM_MOVE: y -20vw -> selector .hero-paralax.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -25vw -> selector .hero-paralax.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -15vw -> selector .hero-paralax.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -25vw -> selector .hero-paralax.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -25vw -> selector .hero-paralax.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -26vw -> selector .hero-paralax.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -19vw -> selector .hero-paralax.set-5 (duration 500ms, delay 0ms, easing lineair/geen)

### a-262 — Button Dots Hover In

Triggers:
- `e-913` `MOUSE_OVER` target `selector .button-wrapper`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - STYLE_OPACITY: opacity 0 -> selector .dot-span (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 1 -> {} (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - STYLE_OPACITY: opacity 1 -> selector .dot-span (duration 200ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> {} (duration 200ms, delay 0ms, easing lineair/geen)

### a-263 — Button Dots Hover In 2

Triggers:
- `e-914` `MOUSE_OUT` target `selector .button-wrapper`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - STYLE_OPACITY: opacity 1 -> {} (duration 200ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .dot-span (duration 200ms, delay 600ms, easing lineair/geen)

### a-265 — hero-scroll-july vsr-2 7

Triggers:
- `e-878` `SCROLLING_IN_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|8579ced5-bb5c-a59c-9a98-4b378ead2465`; offsets `niet expliciet`; media `main`, `medium`
- `e-929` `SCROLLING_IN_VIEW` target `id 66d064ef6b231df0c0e0f231|8579ced5-bb5c-a59c-9a98-4b378ead2465`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 26%
    - TRANSFORM_MOVE: y 0vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .right-anim (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .left-anim (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_SIZE: width 97.5%, height 97.5% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45.5%
    - STYLE_SIZE: width 100%, height 100% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y -40vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -23.9vw -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - TRANSFORM_MOVE: y -120vw -> selector .left-anim (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -120vw -> selector .right-anim (duration 500ms, delay 0ms, easing lineair/geen)

### a-266 — apple-watch

Triggers:
- `e-917` `SCROLLING_IN_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|757901a0-961e-c0e9-1b4d-147e2ed5b1bb`; offsets `niet expliciet`; media `main`, `medium`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 16%
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-10 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - TRANSFORM_MOVE: y -9vw -> selector .app-watch.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-10 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20vw -> selector .app-watch.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -17vw -> selector .app-watch.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -18vw -> selector .app-watch.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20vw -> selector .app-watch.set-9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -14vw -> selector .app-watch.set-8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -10vw -> selector .app-watch.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 55%
    - STYLE_OPACITY: opacity 0 -> selector .case-8-2-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 64%
    - STYLE_OPACITY: opacity 1 -> selector .case-8-2-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 66%
    - STYLE_OPACITY: opacity 0 -> selector .case-8-2-text.grey (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 76%
    - STYLE_OPACITY: opacity 1 -> selector .case-8-2-text.grey (duration 500ms, delay 0ms, easing lineair/geen)

### a-267 — apple-watch mob

Triggers:
- `e-918` `SCROLLING_IN_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|757901a0-961e-c0e9-1b4d-147e2ed5b1bb`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 16%
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-10 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .app-watch.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 38%
    - STYLE_OPACITY: opacity 0 -> selector .case-8-2-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_OPACITY: opacity 0 -> selector .case-8-2-text.grey (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 46%
    - TRANSFORM_MOVE: y -9vw -> selector .app-watch.set-5 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-1 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-3 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -16vw -> selector .app-watch.set-10 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20vw -> selector .app-watch.set-7 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -17vw -> selector .app-watch.set-2 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -18vw -> selector .app-watch.set-6 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -20vw -> selector .app-watch.set-9 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -14vw -> selector .app-watch.set-8 (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -10vw -> selector .app-watch.set-4 (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .case-8-2-text (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 48%
    - STYLE_OPACITY: opacity 1 -> selector .case-8-2-text.grey (duration 500ms, delay 0ms, easing lineair/geen)

### a-268 — time-line-gradient

Triggers:
- `e-921` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|27282b9d-f26f-b05e-40d3-59ff95925888`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-947` `SCROLL_INTO_VIEW` target `id 66d064ef6b231df0c0e0f231|f01b4663-a353-ea97-e4f9-95fc19605726`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-949` `SCROLL_INTO_VIEW` target `id 66d064ef6b231df0c0e0f231|9e2b2814-73bd-b5cd-2a13-331720bc3f4c`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-951` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|62b9f3cd-1142-61fc-08a7-4ee2ebb20f78`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-955` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|7f823db4-a8b0-fa39-394c-3437e2677425`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 0%, y 0% -> selector .stats-card-gradient.time (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 56%, y 2% -> selector .stats-card-gradient.time (duration 1000ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 56%, y 90% -> selector .stats-card-gradient.time (duration 1000ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x 0%, y 90% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: x 0%, y 0% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)

### a-269 — timeline-2

Triggers:
- `e-923` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|c8489335-a3b4-1127-2c9f-942b0f507b0f`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-943` `SCROLL_INTO_VIEW` target `id 66d064ef6b231df0c0e0f231|c8489335-a3b4-1127-2c9f-942b0f507b0f`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-1015` `SCROLL_INTO_VIEW` target `id 67403ac9d6630914b27160ef|2c5cb9ae-b629-99d2-a64f-2c932421ff51`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 0%, y -11% -> selector .stats-card-gradient.time (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 68%, y -11% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 0%, y 17% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x 0%, y -11% -> selector .stats-card-gradient.time (duration 1000ms, delay 0ms, easing lineair/geen)

### a-270 — timeline-2 2

Triggers:
- `e-925` `SCROLL_INTO_VIEW` target `id 66cd8dffcc885c1c3b20b8d3|49b788bd-40e9-9216-7891-04de08d5d1a7`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-945` `SCROLL_INTO_VIEW` target `id 66d064ef6b231df0c0e0f231|49b788bd-40e9-9216-7891-04de08d5d1a7`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`
- `e-1017` `SCROLL_INTO_VIEW` target `id 67403ac9d6630914b27160ef|2c5cb9ae-b629-99d2-a64f-2c932421ff63`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 0%, y -11% -> selector .stats-card-gradient.time (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 68%, y -11% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 81%, y 49% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x -8%, y 49% -> selector .stats-card-gradient.time (duration 1500ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: x 0%, y -11% -> selector .stats-card-gradient.time (duration 1000ms, delay 0ms, easing lineair/geen)

### a-271 — timeline-btn

Triggers:
- `e-927` `SCROLL_INTO_VIEW` target `selector .time-line-btn-wrap`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: true, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: x 2%, y -43% -> selector .stats-card-gradient.time.btn (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: x 106%, y -46% -> selector .stats-card-gradient.time.btn (duration 700ms, delay 0ms, easing lineair/geen)
- Groep 2
  - TRANSFORM_MOVE: x 106%, y 19% -> selector .stats-card-gradient.time.btn (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 3
  - TRANSFORM_MOVE: x 0%, y 19% -> selector .stats-card-gradient.time.btn (duration 700ms, delay 0ms, easing lineair/geen)
- Groep 4
  - TRANSFORM_MOVE: x 2%, y -43% -> selector .stats-card-gradient.time.btn (duration 300ms, delay 0ms, easing lineair/geen)

### a-272 — hero-about 2

Triggers:
- `e-961` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|a7cd9684-7712-b1ab-07ca-88ee417690b6`; offsets `niet expliciet`; media `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 28%
    - TRANSFORM_MOVE: y 0rem -> selector .hero-about-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 53 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0rem -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 4rem -> selector .hero-about-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 60%
    - STYLE_OPACITY: opacity 0 -> selector .subheading-hero-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 10rem -> selector .subheading-hero-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0rem -> selector .hero-about-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 68%
    - TRANSFORM_MOVE: y -30rem -> selector .hero-about-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - PLUGIN_LOTTIE: lottie progress 99 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -4rem -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> selector .lottie-about (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -2rem -> selector .subheading-hero-about (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .subheading-hero-about (duration 500ms, delay 0ms, easing lineair/geen)

### a-273 — line 2

Triggers:
- `e-962` `SCROLLING_IN_VIEW` target `id 667a7576e7e7ef3ba89b3f6a|c607c920-bd31-ea66-2ef1-a977c573326e`; offsets `niet expliciet`; media `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 0%
    - TRANSFORM_MOVE: x -5vw -> selector .left-line (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 5vw -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 33%
    - TRANSFORM_MOVE: x -20vw -> selector .left-line (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: x 20vw -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 98%
    - STYLE_OPACITY: opacity 1 -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 100%
    - STYLE_OPACITY: opacity 0 -> selector .right-line (duration 500ms, delay 0ms, easing lineair/geen)

### a-274 — blog-scroll-bot-mob

Triggers:
- `e-964` `PAGE_SCROLL_DOWN` target `id 667a7576e7e7ef3ba89b3f6e`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`
- `e-966` `PAGE_SCROLL_DOWN` target `id 667a7576e7e7ef3ba89b3f6d`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_MOVE: y 0rem -> id 667a7576e7e7ef3ba89b3f6e|634e812b-d92b-abf3-e2d3-ecdb18e36d0d (duration 500ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0rem -> id 8b251f90-ecf6-2712-000f-63a6e0b37b66 (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_MOVE: y -4rem -> id 667a7576e7e7ef3ba89b3f6e|634e812b-d92b-abf3-e2d3-ecdb18e36d0d (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y -4rem -> id 8b251f90-ecf6-2712-000f-63a6e0b37b66 (duration 500ms, delay 0ms, easing ease)

### a-275 — blog-scroll-bot-mob 2

Triggers:
- `e-963` `PAGE_SCROLL_UP` target `id 667a7576e7e7ef3ba89b3f6e`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`
- `e-965` `PAGE_SCROLL_UP` target `id 667a7576e7e7ef3ba89b3f6d`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: y 0rem -> id 667a7576e7e7ef3ba89b3f6e|634e812b-d92b-abf3-e2d3-ecdb18e36d0d (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 0rem -> id 8b251f90-ecf6-2712-000f-63a6e0b37b66 (duration 500ms, delay 0ms, easing ease)

### a-276 — Big Brands Scroll Desktop

Triggers:
- `e-967` `SCROLLING_IN_VIEW` target `id 11ad2a2c-fbdb-aaaa-ff30-de545f64c698`; offsets `niet expliciet`; media `main`, `medium`, `small`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 5%
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id a30d1d8d-db64-936b-3bf3-5b9b38506c08 (duration 500ms, delay 0ms, easing easeInOut)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id 4b4410d1-924d-4869-f42f-066305f914b6 (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 10%
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id 42daf8dd-b4b1-c82c-e55f-603cc3d37df8 (duration 500ms, delay 0ms, easing easeInOut)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id 0611c4c4-fa52-5d8e-a72d-8a258677a48b (duration 500ms, delay 0ms, easing easeInOut)
    - TRANSFORM_SCALE: scaleX 0.5, scaleY 0.5 -> id c3d05df1-f0c6-4119-6d3e-f09f26da287f (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 20%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id a30d1d8d-db64-936b-3bf3-5b9b38506c08 (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 25%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 4b4410d1-924d-4869-f42f-066305f914b6 (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 30%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 42daf8dd-b4b1-c82c-e55f-603cc3d37df8 (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 35%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id 0611c4c4-fa52-5d8e-a72d-8a258677a48b (duration 500ms, delay 0ms, easing easeInOut)
  - Keyframe 40%
    - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id c3d05df1-f0c6-4119-6d3e-f09f26da287f (duration 500ms, delay 0ms, easing easeInOut)

### a-277 — Brand Card View Mobile

Triggers:
- `e-968` `SCROLL_INTO_VIEW` target `selector .big-brand-card`; offsets `scrollOffsetValue: 0, scrollOffsetUnit: %, delay: null, direction: null, loop: false, effectIn: null`; media `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - TRANSFORM_SCALE: scaleX 0.2, scaleY 0.2 -> id a30d1d8d-db64-936b-3bf3-5b9b38506c08 (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - TRANSFORM_SCALE: scaleX 1, scaleY 1 -> id a30d1d8d-db64-936b-3bf3-5b9b38506c08 (duration 2000ms, delay 0ms, easing outExpo)

### a-278 — hero-scroll-july vsr-2 8

Triggers:
- `e-970` `SCROLLING_IN_VIEW` target `id 67403ac9d6630914b27160ef|8579ced5-bb5c-a59c-9a98-4b378ead2465`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-1019` `SCROLLING_IN_VIEW` target `id 679f3eafc06be5ba91e7c5e0|b0346028-3c19-d8b8-56d4-de3f28a06cd3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-1020` `SCROLLING_IN_VIEW` target `id 67a1e59312287567f30282e6|b0346028-3c19-d8b8-56d4-de3f28a06cd3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`
- `e-1021` `SCROLLING_IN_VIEW` target `id 67a33ec52eb3b603476f3b9c|b0346028-3c19-d8b8-56d4-de3f28a06cd3`; offsets `niet expliciet`; media `main`, `medium`, `small`, `tiny`

Continuous scroll/mouse keyframes:
- Parameter: `SCROLL_PROGRESS`
  - Keyframe 26%
    - TRANSFORM_MOVE: y 0vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .right-anim (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y 0vw -> selector .left-anim (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 43%
    - STYLE_SIZE: width 97.5%, height 97.5% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 1 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 45.5%
    - STYLE_SIZE: width 100%, height 100% -> selector .show-real-video (duration 500ms, delay 0ms, easing lineair/geen)
    - STYLE_OPACITY: opacity 0 -> selector .lap-top-bg (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 50%
    - TRANSFORM_MOVE: y -40vw -> selector .hero-heading (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -23.9vw -> selector .show-wrap (duration 500ms, delay 0ms, easing lineair/geen)
  - Keyframe 56%
    - TRANSFORM_MOVE: y -120vw -> selector .left-anim (duration 500ms, delay 0ms, easing lineair/geen)
    - TRANSFORM_MOVE: y -120vw -> selector .right-anim (duration 500ms, delay 0ms, easing lineair/geen)

### a-279 — Navbar Open

Triggers:
- `e-975` `NAVBAR_OPEN` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95405f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - GENERAL_DISPLAY: display block -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f2 (duration 0ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(8, 8, 8, 0) -> selector .menu-button-color (duration 500ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display none -> selector .code-embed-2 (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display flex -> selector .filters-button (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display none -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f4 (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 1
  - GENERAL_DISPLAY: display none -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f2 (duration 0ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(8, 8, 8, 1) -> selector .menu-button-color (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display flex -> selector .code-embed-2 (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display none -> selector .filters-button (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display block -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f4 (duration 0ms, delay 0ms, easing lineair/geen)

### a-280 — Navbar Close

Triggers:
- `e-1013` `NAVBAR_CLOSE` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95405f`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - GENERAL_DISPLAY: display none -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f4 (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display none -> selector .code-embed-2 (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display flex -> selector .filters-button (duration 0ms, delay 0ms, easing lineair/geen)
  - GENERAL_DISPLAY: display block -> id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9540f2 (duration 0ms, delay 0ms, easing lineair/geen)
  - STYLE_BACKGROUND_COLOR: rgba(8, 8, 8, 0) -> selector .menu-button-color (duration 0ms, delay 0ms, easing lineair/geen)

### a-281 — Filters Branding Close

Triggers:
- `e-972` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954299`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-974` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9541ff`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-977` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9541d8`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-978` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9541da`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-979` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954167`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-981` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95418e`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-984` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954237`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-986` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954284`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-987` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954235`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-992` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954267`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-993` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954282`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-994` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95421a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-995` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954169`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-996` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95414a`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-997` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e95421c`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-1000` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954148`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-1003` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954190`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-1004` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954269`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-1009` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e954201`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`
- `e-1010` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9542a2`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - GENERAL_DISPLAY: display default -> selector .filters-pop-up (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 1
  - GENERAL_DISPLAY: display none -> selector .filters-pop-up (duration 0ms, delay 0ms, easing lineair/geen)

### a-282 — Filters Branding Open

Triggers:
- `e-1011` `MOUSE_CLICK` target `id 6798cf1e1f2a6c61e97e60d2|d637b8be-3236-4156-6bb8-83327e9542a9`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - GENERAL_DISPLAY: display none -> selector .filters-pop-up (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 1
  - GENERAL_DISPLAY: display flex -> selector .filters-pop-up (duration 0ms, delay 0ms, easing lineair/geen)

### a-283 — Cookie Banner [SHOW]

Triggers:
- `e-1022` `MOUSE_CLICK` target `selector .fs-cc-banner_trigger`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - GENERAL_DISPLAY: display none -> selector .fs-cc-banner_component (duration 0ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 100% -> selector .fs-cc-banner_component (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - GENERAL_DISPLAY: display flex -> selector .fs-cc-banner_component (duration 0ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 0px -> selector .fs-cc-banner_component (duration 300ms, delay 0ms, easing ease)

### a-284 — Cookie Banner [HIDE]

Triggers:
- `e-1023` `MOUSE_SECOND_CLICK` target `selector .fs-cc-banner_trigger`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: y 100% -> selector .fs-cc-banner_component (duration 300ms, delay 0ms, easing ease)
- Groep 1
  - GENERAL_DISPLAY: display none -> selector .fs-cc-banner_component (duration 0ms, delay 0ms, easing lineair/geen)

### a-285 — Preferences Checkbox [CHECK]

Triggers:
- `e-1024` `MOUSE_CLICK` target `selector .fs-cc-prefs_checkbox`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: x 20px -> selector .fs-cc-prefs_toggle (duration 250ms, delay 0ms, easing ease)
  - STYLE_BACKGROUND_COLOR: rgba(254, 74, 34, 1) -> selector .fs-cc-prefs_checkbox-field (duration 200ms, delay 0ms, easing ease)

### a-286 — Preferences Checkbox [UNCHECK]

Triggers:
- `e-1025` `MOUSE_SECOND_CLICK` target `selector .fs-cc-prefs_checkbox`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - TRANSFORM_MOVE: x 0px -> selector .fs-cc-prefs_toggle (duration 250ms, delay 0ms, easing ease)
  - STYLE_BACKGROUND_COLOR: rgba(230, 232, 236, 1) -> selector .fs-cc-prefs_checkbox-field (duration 200ms, delay 0ms, easing ease)

### a-287 — Preferences Popup [SHOW]

Triggers:
- `e-1026` `MOUSE_CLICK` target `selector .fs-cc-prefs_trigger`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0 (initial state)
  - GENERAL_DISPLAY: display none -> selector .fs-cc-prefs_component (duration 0ms, delay 0ms, easing lineair/geen)
  - TRANSFORM_MOVE: y 20px -> selector .fs-cc-prefs_component (duration 500ms, delay 0ms, easing lineair/geen)
  - STYLE_OPACITY: opacity 0 -> selector .fs-cc-prefs_component (duration 500ms, delay 0ms, easing lineair/geen)
- Groep 1
  - GENERAL_DISPLAY: display flex -> selector .fs-cc-prefs_component (duration 0ms, delay 0ms, easing lineair/geen)
- Groep 2
  - STYLE_OPACITY: opacity 1 -> selector .fs-cc-prefs_component (duration 300ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 0px -> selector .fs-cc-prefs_component (duration 300ms, delay 0ms, easing ease)

### a-288 — Preferences Popup [HIDE]

Triggers:
- `e-1027` `MOUSE_SECOND_CLICK` target `selector .fs-cc-prefs_trigger`; offsets `scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, loop: false, effectIn: null`; media `main`, `medium`, `small`, `tiny`

Discrete groepen:
- Groep 0
  - STYLE_OPACITY: opacity 0 -> selector .fs-cc-prefs_component (duration 500ms, delay 0ms, easing ease)
  - TRANSFORM_MOVE: y 20px -> selector .fs-cc-prefs_component (duration 300ms, delay 0ms, easing ease)
- Groep 1
  - GENERAL_DISPLAY: display none -> selector .fs-cc-prefs_component (duration 0ms, delay 0ms, easing lineair/geen)
