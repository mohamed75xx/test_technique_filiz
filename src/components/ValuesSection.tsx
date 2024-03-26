import { Container, Box, Typography, Paper, CssBaseline } from "@mui/material";

function ValuesSection() {
  const values = [
    {
      logo: "/icons/coffee-icon.svg",
      title: "Passionné de Café",
      description:
        "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.",
    },
    {
      logo: "/icons/cat-icon.svg",
      title: "Bien-être des Chats",
      description:
        "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.",
    },
    {
      logo: "/icons/plant-icon.svg",
      title: "Engagement Environnemental",
      description:
        "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          padding: "80px 30px",
          "@media (min-width:600px)": {
            padding: "80px",
          },
        }}
        id="values"
      >
        <Box textAlign="center" mb={7.5}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#71a894", fontWeight: "bold" }}
            gutterBottom
          >
            Nos valeurs
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="wrap"
          sx={{ gap: "60px" }}
        >
          {values.map((value, index) => (
            <Box
              key={index}
              flexBasis={{ xs: "100%", md: "calc(33.333% - 40px)" }}
              sx={{ height: "500px" }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "64px 17px",
                }}
              >
                <img
                  src={value.logo}
                  alt={value.title}
                  style={{ maxWidth: "80%", marginBottom: 16 }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {value.title}
                </Typography>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                  {value.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default ValuesSection;
