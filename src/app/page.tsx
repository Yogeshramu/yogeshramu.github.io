import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Tag,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Expertise / Skills Overview Section */}
      <RevealFx translateY="12" delay={0.5} fillWidth>
        <Column fillWidth gap="m" paddingX="l">
          <Row fillWidth horizontal="between" vertical="center" marginBottom="s">
            <Text variant="label-strong-m" onBackground="neutral-weak">Core Expertise</Text>
            <Line background="brand-alpha-strong" flex={1} marginLeft="m" />
          </Row>
          <Row fillWidth gap="l" s={{ direction: "column" }}>
            {about.technical.skills.map((skill, index) => (
              <Column key={index} flex={1} gap="s">
                <Text variant="heading-strong-m">{skill.title}</Text>
                <Row wrap gap="4">
                  {skill.tags?.slice(0, 4).map((tag, tagIndex) => (
                    <Tag key={tagIndex} size="s" prefixIcon={tag.icon}>
                      {tag.name}
                    </Tag>
                  ))}
                </Row>
              </Column>
            ))}
          </Row>
        </Column>
      </RevealFx>

      {/* Services Section */}
      {home.services && (
        <RevealFx translateY="12" delay={0.6} fillWidth>
          <Column fillWidth gap="xl" paddingX="l" marginTop="64">
            <Column gap="m">
              <Text variant="label-strong-m" onBackground="brand-weak" align="center">{home.services.title}</Text>
              <Heading variant="display-strong-xs" wrap="balance" align="center" marginBottom="l">
                {home.services.description}
              </Heading>
            </Column>
            <Row fillWidth gap="m" s={{ direction: "column" }} horizontal="center">
              {home.services.items.map((service, index) => (
                <Column key={index} flex={1} gap="m" background="surface" padding="l" radius="l" border="neutral-alpha-weak" horizontal="center" align="center">
                  <Row height="48" vertical="center" horizontal="center" background="brand-alpha-weak" radius="full" width="48">
                    <Icon name={service.icon} size="m" onBackground="brand-weak" />
                  </Row>
                  <Text variant="heading-strong-m" align="center" marginBottom="s">{service.title}</Text>
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                </Column>
              ))}
            </Row>
          </Column>
        </RevealFx>
      )}



      {/* Professional Journey / Impact Section */}
      <RevealFx translateY="12" delay={0.8} fillWidth>
        <Column fillWidth gap="m" paddingX="l" marginTop="xl">
          <Row fillWidth horizontal="between" vertical="center" marginBottom="m">
            <Line background="brand-alpha-strong" flex={1} marginRight="m" />
            <Text variant="label-strong-m" onBackground="neutral-weak">Recent Journey</Text>
          </Row>
          <Column fillWidth gap="l">
            {about.work.experiences.slice(0, 1).map((exp, index) => (
              <Column key={index} gap="s" background="surface" padding="l" radius="l" border="neutral-alpha-weak">
                <Row horizontal="between" vertical="center">
                  <Text variant="heading-strong-l">{exp.company}</Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">{exp.timeframe}</Text>
                </Row>
                <Text variant="body-default-m" onBackground="brand-weak">{exp.role}</Text>
                <Column gap="4" marginTop="s">
                  {exp.achievements.slice(0, 1).map((achievement, i) => (
                    <Row key={i} gap="8" vertical="start">
                      <Icon name="arrowRight" size="xs" onBackground="brand-weak" style={{ marginTop: '4px' }} />
                      <Text variant="body-default-m">{achievement}</Text>
                    </Row>
                  ))}
                </Column>
                <Button href="/about" variant="secondary" size="s">Learn more</Button>
              </Column>
            ))}
          </Column>
        </Column>
      </RevealFx>



      {/* Blog Section */}
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest Tech Insights
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}

      {/* Connect / Newsletter */}
      <Mailchimp />
    </Column>
  );
}
