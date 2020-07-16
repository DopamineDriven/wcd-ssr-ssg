import { useRouter } from "next/router";
import ErrorPage from "../_error";
import Container from "../../components/container";
import PostBody from "../../components/postBody";
import Header from "../../components/header";
import PostHeader from "../../components/postHeader";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/postTitle";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import PostType from "../../types/posts";
import markdownToHtml from "../../lib/mdToHtml";

const Post = ({
	post,
	morePosts,
	preview
}: {
	post: PostType;
	morePosts: PostType[];
	preview?: boolean;
}) => {
	const router = useRouter();
	return !router.isFallback && !post?.slug ? (
		<ErrorPage statusCode={404} />
	) : (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>🐜🐜🐜Loading🐜🐜🐜</PostTitle>
				) : (
					<>
						<article className="mb-32">
							<Head>
								<title>
									{post.title} | SSG via Next.js and {CMS_NAME}
								</title>
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"author",
		"content",
		"opImage",
		"coverImage"
	]);
	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map(posts => {
			return {
				params: {
					slug: posts.slug
				}
			};
		}),
		fallback: false
	};
}
