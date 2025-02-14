export type CloseApproachData = {
    des: string;
    orbit_id: string;
    jd: string;
    cd: string;
    dist: string;
    dist_min: string;
    dist_max: string;
    v_rel: string;
    v_inf: string;
    t_sigma_f: string;
    h: string | null;
    diameter: string | null;
    diameter_sigma: string | null;
    fullname: string;
}

export type SmallBodyApiResponse = {
    signature: {
        source: string;
        version: string;
    },
    fields: string[];
    data: string[][];
    count: number;
    total: number;
}

export type SmallBodyApiData = {
    signature: {
        source: string;
        version: string;
    },
    fields: string[];
    data: CloseApproachData[];
    count: number;
    total: number;
}

export type SmallBodyTotalApiResponse = {
    signature: {
        source: string;
        version: string;
    },
    count: number;
    total: number;
}