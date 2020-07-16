import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
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
import mdToHtml from "../../lib/mdToHtml";
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
					<Fragment>
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
					</Fragment>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

export const getStaticProps = async ({
	params
}: GetStaticProps & { params: { slug: string } }) => {
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
};

export const getStaticPaths = async ({}: GetStaticPaths) => {
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
};
