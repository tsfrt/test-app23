# Accelerator Log

## Options
```json
{
  "apiBinding" : false,
  "bsGitBranch" : "main",
  "bsGitRepository" : "github.com?owner=tsfrt&repo=test-app23",
  "messagingBinding" : false,
  "oracleBinding" : true,
  "projectName" : "test-app23"
}
```
## Log
```
┏ engine (Chain)
┃  Info Running Chain(GeneratorValidationTransform, UniquePath)
┃ ┏ ┏ engine.transformations[0].validated (Combo)
┃ ┃ ┃  Info Combo running as Chain
┃ ┃ ┃ engine.transformations[0].validated.delegate (Chain)
┃ ┃ ┃  Info Running Chain(Combo)
┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0] (Combo)
┃ ┃ ┃ ┃  Info Combo running as Chain
┃ ┃ ┃ ┃ engine.transformations[0].validated.delegate.transformations[0].delegate (Chain)
┃ ┃ ┃ ┃  Info Running Chain(Merge, UniquePath)
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0] (Merge)
┃ ┃ ┃ ┃ ┃  Info Running Merge(Combo, Combo, Combo)
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[0] (Combo)
┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Include
┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[0].delegate (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [**/*]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug .npmrc matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/api.yaml matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/empty.yaml matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/messaging.yaml matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/oracle.yaml matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.d.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.html matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/github.svg matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-logo.svg matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.png matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.webp matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+layout.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Counter.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Header.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.server.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/styles.css matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.server.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/game.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.svelte matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/reduced-motion.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/words.server.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug static/favicon.png matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug static/robots.txt matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug svelte.config.js matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug tsconfig.json matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug vite.config.ts matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┗ Debug workload.yaml matched [**/*] -> included
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[1] (Combo)
┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Include
┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[1].delegate (Include)
┃ ┃ ┃ ┃ ┃ ┃  Info Will include [package.json, **.md, workload.yaml]
┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug .npmrc didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug README.md matched [package.json, **.md, workload.yaml] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/api.yaml didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/empty.yaml didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/messaging.yaml didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/oracle.yaml didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug package.json matched [package.json, **.md, workload.yaml] -> included
┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.d.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.html didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/github.svg didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-logo.svg didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.png didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.webp didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+layout.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Counter.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Header.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.server.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/styles.css didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.server.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/game.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.svelte didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/reduced-motion.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/words.server.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug static/favicon.png didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug static/robots.txt didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug svelte.config.js didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug tsconfig.json didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ Debug vite.config.ts didn't match [package.json, **.md, workload.yaml] -> excluded
┃ ┃ ┃ ┃ ┃ ┗ Debug workload.yaml matched [package.json, **.md, workload.yaml] -> included
┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2] (Combo)
┃ ┃ ┃ ┃ ┃ ┃  Info Combo running as Chain
┃ ┃ ┃ ┃ ┃ ┃ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate (Chain)
┃ ┃ ┃ ┃ ┃ ┃  Info Running Chain(Exclude, ReplaceText, ReplaceText, ReplaceText, ReplaceText, ReplaceText, ReplaceText, ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[0] (Exclude)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Will exclude [bindings/**]
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .gitignore didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug .npmrc didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug README.md didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/api.yaml matched [bindings/**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/empty.yaml matched [bindings/**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/messaging.yaml matched [bindings/**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug bindings/oracle.yaml matched [bindings/**] -> excluded
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug package.json didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.d.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/app.html didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/github.svg didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-logo.svg didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.png didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/lib/images/svelte-welcome.webp didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+layout.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/+page.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Counter.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/Header.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/about/+page.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.server.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/db/+page.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/styles.css didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.server.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/+page.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/game.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.svelte didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/how-to-play/+page.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/reduced-motion.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug src/routes/sverdle/words.server.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug static/favicon.png didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug static/robots.txt didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug svelte.config.js didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug tsconfig.json didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┃ Debug vite.config.ts didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┗ Debug workload.yaml didn't match [bindings/**] -> included
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[1] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Will replace [accelerator-placeholder-name->test-app23]
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[2] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (#oracleBinding) evaluated to true
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Will replace [oracle-placeholder->- name: oracle-bindi...(truncated)]
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[3] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Condition (#apiBinding) evaluated to false
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[4] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Condition (#messagingBinding) evaluated to false
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[5] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Condition (!#oracleBinding) evaluated to false
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[6] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (!#apiBinding) evaluated to true
┃ ┃ ┃ ┃ ┃ ┃ ┗  Info Will replace [api-placeholder->]
┃ ┃ ┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[0].sources[2].delegate.transformations[7] (ReplaceText)
┃ ┃ ┃ ┃ ┃ ┃ ┃  Info Condition (!#messagingBinding) evaluated to true
┃ ┃ ┃ ┃ ┗ ┗ ┗  Info Will replace [messaging-placeholder->]
┃ ┃ ┃ ┃ ┏ engine.transformations[0].validated.delegate.transformations[0].delegate.transformations[1] (UniquePath)
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/+page.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path '.gitignore', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/lib/images/svelte-welcome.webp', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/words.server.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'static/favicon.png', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/db/+page.server.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'vite.config.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/+page.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/lib/images/svelte-logo.svg', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/about/+page.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/+page.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/Counter.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/app.html', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/styles.css', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/game.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/how-to-play/+page.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/how-to-play/+page.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'workload.yaml', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/lib/images/github.svg', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/sverdle/reduced-motion.ts', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'svelte.config.js', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/about/+page.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'README.md', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path '.npmrc', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'static/robots.txt', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/db/+page.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'tsconfig.json', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'package.json', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/+layout.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/lib/images/svelte-welcome.png', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/routes/Header.svelte', will use the one appearing last 
┃ ┃ ┃ ┃ ┃ Debug Multiple representations for path 'src/app.d.ts', will use the one appearing last 
┃ ┗ ┗ ┗ ┗ Debug Multiple representations for path 'src/routes/sverdle/+page.server.ts', will use the one appearing last 
┗ ╺ engine.transformations[1] (UniquePath)
```
