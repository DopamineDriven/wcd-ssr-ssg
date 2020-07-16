import { Fragment } from "react";
import Head from "next/head";
import Post from "../types/posts";
import { getAllPosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Container from "../components/container";
import MorePosts from "../components/morePosts";
import HeroPost from "../components/heroPost";
import Intro from "../components/intro";
import Layout from "../components/layout";

const Index = ({ allPosts }: { allPosts: Post[] }) => {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<Fragment>
			<Layout>
				<Head>
					<title>SSG via Next.js and {CMS_NAME}</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MorePosts posts={morePosts} />}
				</Container>
			</Layout>
		</Fragment>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"excerpt"
	]);
	return {
		props: { allPosts }
	};
};
