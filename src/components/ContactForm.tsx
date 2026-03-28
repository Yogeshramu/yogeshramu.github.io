"use client";

import {
    Column,
    Heading,
    Text,
    Row,
    Input,
    Button,
} from "@once-ui-system/core";
import { mailchimp } from "@/resources";
import { useState } from "react";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch(mailchimp.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <Column
                maxWidth="s"
                fillWidth
                gap="l"
                padding="xl"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                horizontal="center"
                align="center"
            >
                <Heading variant="display-strong-xs">Thank you!</Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                </Text>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                    Send another message
                </Button>
            </Column>
        );
    }

    return (
        <Column fillWidth gap="xl" horizontal="center">
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <Column gap="8">
                    <Text variant="label-default-s" onBackground="neutral-weak">Name</Text>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Column>
                <Column gap="8">
                    <Text variant="label-default-s" onBackground="neutral-weak">Email Address</Text>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Column>
                <Column gap="8">
                    <Text variant="label-default-s" onBackground="neutral-weak">Message</Text>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            minHeight: "200px",
                            padding: "16px",
                            borderRadius: "var(--radius-m)",
                            backgroundColor: "var(--neutral-alpha-weak)",
                            border: "1px solid var(--neutral-alpha-weak)",
                            color: "var(--neutral-on-background-strong)",
                            fontFamily: "inherit",
                            fontSize: "16px",
                            outline: "none",
                            resize: "vertical",
                        }}
                    />
                </Column>

                <Button
                    type="submit"
                    size="l"
                    fillWidth
                    variant="primary"
                    loading={status === "loading"}
                >
                    Send Message
                </Button>

                {status === "error" && (
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                        Something went wrong. Please try again.
                    </Text>
                )}
            </form>
        </Column>
    );
};
