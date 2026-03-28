import {
    Column,
    Heading,
    Text,
    RevealFx,
    Meta,
    Schema,
} from "@once-ui-system/core";
import { contact, baseURL, person } from "@/resources";
import { ContactForm } from "@/components";
import React from "react";

export async function generateMetadata() {
    return Meta.generate({
        title: contact.title,
        description: contact.description,
        baseURL: baseURL,
        image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
        path: contact.path,
    });
}

export default function Contact() {
    return (
        <Column fillWidth horizontal="center" gap="xl" paddingY="12">
            <Schema
                as="webPage"
                baseURL={baseURL}
                title={contact.title}
                description={contact.description}
                path={contact.path}
                image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
                author={{
                    name: person.name,
                    url: `${baseURL}/about`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />
            <Column maxWidth="s" horizontal="center" align="center" gap="m">
                <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
                    <Heading wrap="balance" variant="display-strong-l" align="center">
                        {contact.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
                    <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                        {contact.description}
                    </Text>
                </RevealFx>
            </Column>

            <ContactForm />
        </Column>
    );
}
