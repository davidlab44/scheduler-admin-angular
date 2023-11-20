export interface Company {
    id: number;
    official_name: string;
    comercial_name: string;
    nit: string;
    verificationDigit: number;
    email: string;
    phone: string;
    location: string;
    isMain: number;
    country: number;
    domain: string;
    iva_responsible: number;
    impoconsumo_responsible: number;
    is_owner: number;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    company_id: number;
    role: number;
    api_token: string;
    name: string;
    nit: string | null;
    verificationDigit: number | null;
    email: string;
    phone: string | null;
    country: number;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

export interface LoginResponse {
    company: Company;
    user: User;
    success: boolean;
    token: string;
    message: string;
}