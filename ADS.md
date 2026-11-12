# Ads — wemarchasone.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/wemarchasone/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is empty. `afterQuickAnswer.scriptSrc` is empty. `scriptSrc` on the config is empty. `invokeBase` stays empty. No zone from another game is stored here.

`analytics.gaId` in `sites/wemarchasone/site.config.ts` is an empty string. The base layout does not load a Google tag.

Adult and sensitive categories stay off. The 404 page does not render a slot.
