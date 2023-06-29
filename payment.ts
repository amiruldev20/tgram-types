import type { User } from "./manage.ts";

export interface LabeledPrice {
    label: string;
    amount: number;
}

export interface Invoice {
    /* name product */
    title: string;
    /* desc product */
    description: string;
    /* unique */
    start_parameter: string;
    /* currency code */
    currency: string;
    /* total price */
    total_amount: number;
}

export interface ShippingAddress {
    /* currency code */
    country_code: string;
    /* state */
    state: string;
    /* city */
    city: string;
    /* line 1 adress */
    street_line1: string;
    /* line 2 addres */
    street_line2: string;
    /* post code */
    post_code: string;
}

export interface OrderInfo {
    /* name */
    name?: string;
    /* phone */
    phone_number?: string;
    /* email */
    email?: string;
    /* shipping addres */
    shipping_address?: ShippingAddress;
}

export interface ShippingOption {
    /* id */
    id: string;
    /* tile */
    title: string;
    /* price */
    prices: LabeledPrice[];
}

export interface SuccessfulPayment {
    /* currency code */
    currency: string;
    /* toal price */
    total_amount: number;
    /* bot invoice payload */
    invoice_payload: string;
    /* option shipping */
    shipping_option_id?: string;
    /* info order */
    order_info?: OrderInfo;
    /* tele payment id */
    telegram_payment_charge_id: string;
    /* payment identifier */
    provider_payment_charge_id: string;
}

export interface ShippingQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** User specified shipping address */
    shipping_address: ShippingAddress;
}

export interface PreCheckoutQuery {
    /** Unique query identifier */
    id: string;
    /** User who sent the query */
    from: User;
    /** Three-letter ISO 4217 currency code */
    currency: string;

    total_amount: number;
    /** Bot specified invoice payload */
    invoice_payload: string;
    /** Identifier of the shipping option chosen by the user */
    shipping_option_id?: string;
    /** Order information provided by the user */
    order_info?: OrderInfo;
}