import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px', // Ensure there's padding around the container
});

const StyledAccordion = styled(Accordion)({
  width: '100%',
  maxWidth: 800, // Increased maxWidth for bigger appearance
  marginBottom: '20px', // Adjusted for more space between items
  '& .MuiAccordionSummary-root': {
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ddd',
    '&.Mui-expanded': {
      backgroundColor: '#e0e0e0',
    },
  },
  '& .MuiAccordionDetails-root': {
    paddingTop: '16px', // Increase padding for more space inside
  },
  '& .MuiTypography-root': {
    fontSize: '1rem', // Adjust answer text size if needed
  },
});

const StyledTypography = styled(Typography)({
  fontSize: '1.5rem', // Increased font size for questions
  fontWeight: 'bold',
});

const FAQHeading = styled(Typography)({
  margin: '20px 0', // Add some margin above the heading
  fontSize: '2rem', // Larger font size for the heading
  fontWeight: 'bold',
  textAlign: 'center', // Center align the text
});

const FAQ = () => {
  return (
    <StyledContainer>
      <FAQHeading>ተደጋግሞ የሚነሱ ጥያቄዎች</FAQHeading>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <StyledTypography>ጉዳይ እንዴት እንደሚመዘገብ</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          የ"WASH" ቲኬት አፕሊኬሽኑን በመጫን በመቀጠል ወደ መለያዎ ይግቡ እና የጥያቄ እትም ገጽን ይጫኑ።
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <StyledTypography>መተግበሪያውን እንዴት ማግኘት እንደሚቻል</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          WASH አስተዳዳሪዎችን ያግኙ እና አፑን, ወደሚያገኙበት የቴሌግራም ግሩፕ እንዲቀላቀሉ ያስችሉዎታል
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <StyledTypography>እንዴት እንደሚገቡ</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              ለመግባት ኢሜልዎን እና የይለፍ ቃልዎን ይጠቀሙ
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </StyledContainer>
  );
};

export default FAQ;
