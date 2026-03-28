"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailValidation = (value: string) => {
    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleValidation = debounce((value: string) => handleEmailValidation(value), 1000);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (error) {
      handleEmailValidation(value);
    } else {
      debouncedHandleValidation(value);
    }
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email) || !email) {
        setError("Please enter a valid email address.");
        return;
    }

    setStatus("loading");

    try {
        const response = await fetch(mailchimp.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setStatus("success");
            setEmail("");
        } else {
            setStatus("error");
        }
    } catch (e) {
        setStatus("error");
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs" align="center">
          {status === "success" ? "Thank You!" : newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak" align="center">
          {status === "success" 
            ? "I've received your email and will be in touch soon." 
            : newsletter.description}
        </Text>
      </Column>

      {status !== "success" && (
        <form
            onSubmit={handleSubmit}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Row
                fillWidth
                maxWidth={32}
                s={{ direction: "column" }}
                gap="8"
                vertical="start"
            >
                <Row height="48" flex={1}>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleBlur}
                        errorMessage={error}
                        style={{ height: '48px' }}
                    />
                </Row>
                <Row height="48" vertical="center" s={{ width: "full" }}>
                    <Button 
                        type="submit" 
                        size="l" 
                        fillWidth 
                        loading={status === "loading"}
                        style={{ minWidth: "120px", height: "48px" }}
                    >
                        Connect
                    </Button>
                </Row>
            </Row>
        </form>
      )}

      {status === "error" && (
        <Text variant="body-default-s" onBackground="neutral-weak" marginTop="s">
            Something went wrong. Please try again.
        </Text>
      )}
    </Column>
  );
};
