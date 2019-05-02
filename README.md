# angular-mono-poc

## Step-by-step

1. `yarn init`
2. Configure `package.json` as follows:

```json
{
  ...
  "private": true
  ...
}
```

3. `yarn lerna add -D`
4. Configure `lerna.json` as follows:

```json
{
  "packages": [
    "apps/*",
    "libs/*"
  ],
  "version": "independent",
  "npmClient": "yarn",
  "stream": true,
  "useWorkspaces": true
}
```