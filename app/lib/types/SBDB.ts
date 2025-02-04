export type SBDB_Item = {
    [key: string]: string
}

export type Elements = {
    name?: string,
    label?: string,
    title?: string,
    cd_tp?: string,
    value?: string,
    sigma?: string,
    units?: string,
}

export type SBDB_Response = {
    signature: {
        source: string,
        version: string,
    },
    orbit: {
        orbit_id?: string,
        epoch?: string,
        equinox?: string | null,
        elements?: Elements[],
        model_pars?: [],
        cov_epoch?: string,
        moid?: string,
        moid_jup?: string,
        t_jup?: string,
        condition_code?: string,
        rms?: string,
        first_obs?: string,
        last_obs?: string,
        data_arc?: string,
        n_obs_used?: number,
        n_del_obs_used?: string,
        n_dop_obs_used?: string,
        pe_used?: string,
        sb_used?: string,
        two_body?: string,
        soln_date?: string,
        source?: string,
        producer?: string,
        not_valid_before?: string,
        comment?: string,
    },
    phys_par: PhysPar[],
    ca_data: SBDB_Item[],
    object: {
        des: string,
        spkid: string,
        fullname: string,
        shortname?: string,
        prefix: string,
        kind: string,
        neo: boolean,
        pha: boolean,
        orbit_class: {
            code: string,
            name: string,
        },
        orbit_id: string,
    }
}

export type PhysPar = {
    name: string,
    title: string,
    desc: string,
    value: string,
    sigma: string,
    units: string,
    notes: string,
    ref: string,
}

export type SBDB_Data = {
    signature: {
        source: string,
        version: string,
    },
    vi_data?: {
        date?: string,
        ip?: string,
        energy?: string,
    },
    orbit?: {
        first_obs?: string,
        perihelion?: string,
        aphelion?: string,
        period?: string,
    },
    phys_par?: {
        magnitude?: string,
        diameter?: string,
    },
    ca_data?: {
        closest_date?: string,
        orbital_speed?: string,
        distance?: string,
        last_date?: string,
    },
    object?: {
        des?: string,
        orbit_class?: {
            code: string;
            name: string;
        },
        // spkid: string;
        fullname?: string;
    }
}



