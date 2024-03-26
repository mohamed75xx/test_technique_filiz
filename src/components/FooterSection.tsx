import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import styles from "../styles/FooterSection.module.css";

function FooterSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f3f0ea",
        p: { xs: "80px 30px", md: "80px" },
      }}
      id="contact"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontSize: "56px",
                lineHeight: 1,
                mb: 4.625,
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Réservez votre table !
            </Typography>
            <Typography
              sx={{ fontSize: "20px", textAlign: "left" }}
              textAlign={{ xs: "left", lg: "left" }}
              className={styles.main_p}
            >
              Réservez dès maintenant votre table pour une expérience caféinée
              inoubliable en compagnie de nos adorables chats. Plongez dans
              l'ambiance apaisante de Café Chatouille et laissez-vous séduire
              par nos délices caféinés et nos compagnons félins. Réservez dès
              aujourd'hui et préparez-vous à vivre un moment magique de détente
              et de plaisir.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Votre réservation a été envoyée !");
              }}
            >
              {" "}
              <Grid container spacing={{ xs: 2.5, md: 4 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    label="Nom"
                    helperText="Veuillez entrer un nom valide"
                    required
                    fullWidth
                    type="text"
                    sx={{
                      "& .Mui-focused": {
                        color: "#71A894 !important",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#71A894",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    label="Prénom"
                    type="text"
                    helperText="Veuillez entrer un prénom valide"
                    required
                    fullWidth
                    sx={{
                      "& .Mui-focused": {
                        color: "#71A894 !important",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#71A894",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    type="number"
                    helperText="Veuillez entrer un numéro de téléphone valide"
                    label="N° de téléphone"
                    required
                    fullWidth
                    sx={{
                      "& .Mui-focused": {
                        color: "#71A894 !important",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#71A894",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    label="Adresse email"
                    helperText="Veuillez entrer une adresse email valide"
                    required
                    fullWidth
                    type="email"
                    sx={{
                      "& .Mui-focused": {
                        color: "#71A894 !important",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#71A894",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button
                  type="submit"
                  onSubmit={async () =>
                    alert("Votre réservation a été envoyée !")
                  }
                  sx={{
                    backgroundColor: "#71A894",
                    padding: "20px 24px",
                    borderRadius: "46px",
                    ":hover": {
                      backgroundColor: "#71A894",
                    },
                  }}
                >
                  Réserver
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FooterSection;
