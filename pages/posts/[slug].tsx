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
            
        </Layout>
	);
};
