import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { z } from "zod";

export const FooterUrl = [

  {
    name: "Find Talent ",
    link: "/Find Talent"
  },
  {
    name: "Find Assignment",
    link: "/Find Assignment"
  }

]


export const LoginForm = [
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    icon: MdEmail,
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    icon: FaLock,
  },
];

export const country = [
  {
    value: "Nepal",
    label: "NP",
  },
  {
    value: "Australia",
    label: "AUS",
  },
  {
    value: "United States of America",
    label: "USA",
  },
  {
    value: "United Kingdom",
    label: "UK",
  },
]

export const currency = ["AUD", "NPR", "USD", "GBP"]

export const paymentMethod = ["card", "Paypal", "Cash on delivery", "wallet"]

export const formSchema = z.object({
  access_key: z.string(),
  profile_id: z.string(),
  transaction_uuid: z.string(),
  signed_field_names: z.string(),
  unsigned_field_names: z.string(),
  signed_date_time: z.string(),
  locale: z.string(),
  auth_trans_ref_no: z.string(),

  bill_to_forename: z.string().min(3, {
    message: "Forename must be at least 3 characters.",
  }),
  bill_to_surname: z.string().min(5, {
    message: "Surname should be at least 5 characters long.",
  }),
  bill_to_email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bill_to_phone: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid phone number with exactly 10 digits.",
  }),
  bill_to_address_line1: z.string().min(3, {
    message: "Address line should be at least 3 characters long.",
  }),
  bill_to_address_city: z.string().min(3, {
    message: "City name should be at least 3 characters long.",
  }),
  bill_to_address_state: z.string().min(3, {
    message: "State name should be at least 3 characters long.",
  }),
  bill_to_address_country: z.string().min(2, {
    message: "Please select a country.",
  }),
  bill_to_address_postal_code: z.string(),
  amount: z.string().regex(/^\d{3,}$/, {
    message: "Amount should be at least 3 characters long.",
  }),
  transaction_type: z.string(),
  reference_number: z.number(),

  currency: z.string().min(2, {
    message: "Currency should be at least 2 characters long.",
  }),
  payment_method: z.string().min(3, {
    message: "Payment method should be at least 3 characters long.",
  }),
  signature: z.string(),
  card_type: z.string(),
  card_number: z.string(),
  card_expiry_date: z.string(),
});