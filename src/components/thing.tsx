
import {bundleMDX} from 'mdx-bundler'
import { readSync } from 'to-vfile'

import remarkShikiTwoslash from 'remark-shiki-twoslash'

const mdxSource = readSync(`src/components/thing.md`)


const result = await bundleMDX({
  source: mdxSource.toString(),
  mdxOptions (options) {
    options.remarkPlugins = [
       [remarkShikiTwoslash, { theme: "dark-plus" }]
    ]
    return options
  }
  
})

const {code, frontmatter} = result

export { code, frontmatter }
