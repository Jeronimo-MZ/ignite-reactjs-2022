import { stripe } from "@/lib/stripe";
import { NextApiHandler, NextApiRequest } from "next";

const handler: NextApiHandler = async (request, response) => {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        return response.status(405).json({ error: "Method not allowed" });
    }
    const priceId = request.body.priceId;
    if (!priceId) {
        return response.status(404).json({ error: "Price not found" });
    }
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;
    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: priceId, quantity: 1 }],
        cancel_url: cancelUrl,
        success_url: successUrl,
    });

    return response.status(201).json({ checkoutUrl: checkoutSession.url });
};
export default handler;
