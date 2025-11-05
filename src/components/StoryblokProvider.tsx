import type { PropsWithChildren } from "react";
import {storyblokInit} from "@storyblok/react/rsc";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Page } from "./Page";
import { Hero_section } from "./Hero_section";
import { Clients } from "./Clients";
import { About_us } from "./About_us";
import { Bios } from "./Bios";
import { Services } from "./Services";
import { Faq } from "./faq";
import { Service_card } from "./Service_card";
import { Faq_card } from "./faq_card";
import { Bio_card } from "./bio_card";
import { Hero_projects } from "./Hero_projects";
import { Client_card } from "./Client_card";
import { service_heroSection } from "./service_heroSection";
import { Benefit_card } from "./Benefit_card";
import { Benefits } from "./Benefits";
import { Service_process } from "./Service_process";
import { Process_card } from "./Process_card";
import { Project } from "./Project";
import { production_card } from "./production_card";
import { other_productions } from "./other_productions";
import { production_link } from "./production_link";

storyblokInit({
    components: {
        header : Header,
        footer : Footer,
        page : Page,
        hero_section : Hero_section,
        clients : Clients,
        about_us : About_us,
        Bios : Bios,
        services : Services,
        faq : Faq,
        service_card : Service_card,
        faq_card : Faq_card,
        bio_card : Bio_card,
        hero_projects : Hero_projects,
        client_card : Client_card,
        services_heroSection : service_heroSection,
        benefit_card : Benefit_card,
        service_benefits : Benefits,
        service_process : Service_process,
        process_card : Process_card,
        project : Project,
        production_card : production_card,
        other_productions : other_productions,
        production_link : production_link,
    },
    enableFallbackComponent : true,
});

export const StoryblokProvider = ({children}:PropsWithChildren) => {
    return <>{children}</>;
};