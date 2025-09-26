import * as React from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import EmiLogo from '../assets/images/logo.svg';
import { para1Sx } from '../styles/Hero.styles';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  org?: string;
  message?: string;
};

export type ContactSectionProps = {
  heading?: string;
  logo?: React.ReactNode;
  emailAddress?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  onSubmit?: (values: FormValues) => void;
  collectionName?: string;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: '#1F1F1F',
    borderRadius: 2,
    color: '#fff !important',
    '& fieldset': { borderColor: '#2A2A2A' },
    '&:hover fieldset': { borderColor: '#3A3A3A' },
    '&.Mui-focused fieldset': { borderColor: '#555' },
  },
  '& .MuiInputAdornment-root': { color: '#9CA3AF' },
  '& .MuiInputBase-input::placeholder': { opacity: 1, color: '#9CA3AF' },
};

const fieldSxWhite = {
  ...fieldSx,
  '& .MuiInputLabel-root': { color: '#fff' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
  '& .MuiFormLabel-asterisk': { color: '#fff' },
  '& .MuiInputBase-input::placeholder': { color: '#fff', opacity: 0.5 },
} as const;

export default function ContactSection({
  heading = 'We’d love to hear from you!',
  logo,
  emailAddress = 'contact@helloemi.eu',
  linkedinUrl = 'https://www.linkedin.com/company/hej-emi',
  instagramUrl = 'https://www.instagram.com/hej.emi/#',
  onSubmit,
  collectionName = 'contacts',
}: ContactSectionProps) {
  const [values, setValues] = React.useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    org: '',
    message: '',
  });
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState<null | 'ok' | 'err'>(null);

  const setField =
    (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleBlur = (key: keyof FormValues) => setTouched((t) => ({ ...t, [key]: true }));

  const emailInvalid = touched.email && !/^\S+@\S+\.\S+$/.test(values.email.trim());
  const firstNameInvalid = touched.firstName && !values.firstName.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, firstName: true, email: true }));

    const validEmail = /^\S+@\S+\.\S+$/.test(values.email.trim());
    if (!values.firstName.trim() || !validEmail) return;

    try {
      setSubmitting(true);

      const payload = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        org: values.org?.trim() || null,
        message: values.message?.trim() || null,
        createdAt: serverTimestamp(),
        source: 'contact_form',
      };

      await addDoc(collection(db, collectionName), payload);

      setSent('ok');

      onSubmit?.({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        org: values.org?.trim() || undefined,
        message: values.message?.trim() || undefined,
      });

      setValues({ firstName: '', lastName: '', email: '', org: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error(err);
      setSent('err');
    } finally {
      setSubmitting(false);
    }
  };

  React.useEffect(() => {
    if (sent === 'ok') {
      const t = setTimeout(() => setSent(null), 3000);
      return () => clearTimeout(t);
    }
  }, [sent]);

  return (
    <Box
      component="section"
      sx={{ bgcolor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}
      id="contact"
    >
      <Container maxWidth="lg">
        <motion.div variants={sectionVariants} initial="hidden" animate="show">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 6, md: 10 },
              alignItems: { xs: 'stretch', md: 'stretch' },
            }}
          >
            <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
                <Box>
                  {logo ?? (
                    <Box
                      component="img"
                      src={EmiLogo}
                      alt="eMi logo"
                      sx={{ height: 96, width: 'auto', display: 'block' }}
                    />
                  )}
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Box sx={{ textAlign: 'left' }}>
                    <Link
                      href={`mailto:${emailAddress}`}
                      underline="hover"
                      sx={{
                        ...para1Sx,
                        color: '#2F80ED',
                        fontSize: 18,
                        textAlign: 'left',
                        justifyContent: 'baseline',
                      }}
                    >
                      {emailAddress}
                    </Link>
                  </Box>
                  <Stack spacing={2} sx={{ mt: 1.5 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ color: '#9CA3AF' }}>Follow us on</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        component="a"
                        href={instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ color: '#fff' }}
                      >
                        <InstagramIcon fontSize="medium" />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        sx={{ color: '#fff', marginLeft: '0 !important' }}
                      >
                        <LinkedInIcon fontSize="medium" />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  mb: 3,
                }}
              >
                {heading}
              </Typography>

              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
                    <TextField
                      label="First name *"
                      placeholder="First name"
                      fullWidth
                      value={values.firstName}
                      onChange={setField('firstName')}
                      onBlur={() => handleBlur('firstName')}
                      error={Boolean(firstNameInvalid)}
                      helperText={firstNameInvalid ? 'First name is required' : ' '}
                      variant="outlined"
                      sx={fieldSxWhite}
                      InputProps={{ inputProps: { 'aria-required': true } }}
                    />
                    <TextField
                      label="Last name"
                      placeholder="Last name"
                      fullWidth
                      value={values.lastName}
                      onChange={setField('lastName')}
                      onBlur={() => handleBlur('lastName')}
                      variant="outlined"
                      sx={fieldSxWhite}
                    />
                  </Stack>

                  <TextField
                    label="Email *"
                    placeholder="Your e-mail"
                    fullWidth
                    value={values.email}
                    onChange={setField('email')}
                    onBlur={() => handleBlur('email')}
                    error={Boolean(emailInvalid)}
                    helperText={emailInvalid ? 'Enter a valid email' : ' '}
                    variant="outlined"
                    sx={fieldSxWhite}
                    InputProps={{
                      inputProps: { 'aria-required': true },
                    }}
                  />

                  <TextField
                    label="Organisation name"
                    placeholder="Company name"
                    fullWidth
                    value={values.org}
                    onChange={setField('org')}
                    onBlur={() => handleBlur('org')}
                    variant="outlined"
                    sx={fieldSxWhite}
                  />

                  <TextField
                    label="Message"
                    fullWidth
                    value={values.message}
                    onChange={setField('message')}
                    onBlur={() => handleBlur('message')}
                    variant="outlined"
                    sx={fieldSxWhite}
                    multiline
                    minRows={5}
                  />

                  <Box textAlign="right">
                    <Button
                      type="submit"
                      disabled={submitting}
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.25,
                        borderRadius: 999,
                        fontWeight: 600,
                        textTransform: 'none',
                        color: '#fff',
                        background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #F59E0B 0%, #EA580C 100%)',
                        },
                      }}
                    >
                      {submitting ? 'Sending...' : 'Send'}
                    </Button>
                  </Box>

                  {sent === 'ok' && (
                    <Typography sx={{ mt: -1.5, color: '#22c55e' }}>
                      Thanks! We got your message.
                    </Typography>
                  )}
                  {sent === 'err' && (
                    <Typography sx={{ mt: -1.5, color: '#ef4444' }}>
                      Something went wrong. Please try again.
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Box sx={{ textAlign: 'left' }}>
                <Link
                  href={`mailto:${emailAddress}`}
                  underline="hover"
                  sx={{
                    ...para1Sx,
                    color: '#2F80ED',
                    fontSize: 18,
                    textAlign: 'left',
                    justifyContent: 'baseline',
                  }}
                >
                  {emailAddress}
                </Link>
              </Box>
              <Stack spacing={2} sx={{ mt: 1.5 }} direction={'row'} alignItems={'center'}>
                <Typography sx={{ color: '#9CA3AF' }}>Follow us on</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton
                    component="a"
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: '#fff' }}
                  >
                    <InstagramIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: '#fff', marginLeft: '0 !important'}}
                  >
                    <LinkedInIcon fontSize="medium" />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
