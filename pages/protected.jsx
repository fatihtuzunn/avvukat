import { useSession, signOut, getSession } from "next-auth/react"

export default function Admin() {

    const { data: session, status } = useSession({ required: true })

    if (status === "authenticated") {
        return (
            <p>dsadaSigned in as {session.user.email}</p>
        )
    }
}


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin',
            },
        };
    }
    return {
        props: session
    }
};
