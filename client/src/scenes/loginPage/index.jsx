import { Box, Typography, useTheme, useMediaQuery } from "@mui.material";

const LoginPage = () => {
    const theme = useTheme();

    return <Box>
        <Box 
        width="100%" 
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          Welcome to HealthLink, the ultimate sexual health app that provides comprehensive information, resources, and support for all aspects of sexual well-being.
        </Typography>
        </Box>

        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}>
                Welcome to HealthLink, a self-care app for tracking sexual interactions and alerting partners
            </Typography>

        </Box>
        </Box>

};

export default LoginPage;