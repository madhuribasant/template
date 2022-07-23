import Head from "next/head"

export const Meta = ({title , description }) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
  )
}

Meta.defaultProps={
    title:'LetsAdd',
    description: 'Lorem ipsum dolor sit amet.'
}