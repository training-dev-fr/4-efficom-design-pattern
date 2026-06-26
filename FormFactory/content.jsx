function content() {
    return (
        <>
            <Text label="Nom d'utilisateur" id="username" name="username" format="[a-zA-Z]{3,}" />
            <Password label="Mot de passe" id="password" name="password" format=".{6,}" />
            <Email label="email" id="email" name="email" format="[a-zA-Z].*@.*" />
        </>
    )
}