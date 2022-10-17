interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImg: Image;
    phoneNumber: string;
    profilePic: Image;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    compony: string;
    companyImg: Image;
    dateStarted: date;
    dateEnded: date;
    jobTitle: string;
    points: string[];
    technology: Technology[];
}