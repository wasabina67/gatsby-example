import type { GatsbyNode } from "gatsby"
import fs from "fs-extra"
import path from "path"

export const onPostBuild: GatsbyNode["onPostBuild"] = async () => {
  const publicDir = path.join(__dirname, "public")
  const docsDir = path.join(__dirname, "docs")

  if (fs.existsSync(docsDir)) {
    await fs.remove(docsDir)
  }

  await fs.move(publicDir, docsDir)

  console.log("✓ Build output moved from public/ to docs/")
}
