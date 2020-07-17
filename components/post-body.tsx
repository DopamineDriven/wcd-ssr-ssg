import markdownStyles from "./markdown-styles.module.css";

type Props = {
	content: string;
};

const PostBody = ({ content }: Props) => {
	return (
		<div className="max-w-2xl mx-auto">
			<div
				className={markdownStyles["markdown"]}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default PostBody;

/*
* note: had to add /// <reference types="node" /> to the next-env.d.ts root file
** if the brlow file path closed, an error was thrown
*** strange, very strange
// from ../node_modules/next/types/global.d.ts
/// <reference types="node" />

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
  interface Process {
    readonly browser: boolean
  }

  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

*/
