exports.generateEmailTemplate = async (
  purpose,
  recipientName,
  tone
) => {
  const startTime = Date.now();

  const email = `
Dear ${recipientName},

Thank you for reaching out regarding ${purpose}.
We truly appreciate your patience. Our team is currently working on this and will get back to you shortly.

Best regards,
Customer Support Team
`.trim();

  const endTime = Date.now();

  return {
    email,
    ai_response_time_ms: endTime - startTime
  };
};
