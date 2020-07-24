/**
 * A list of valid DNS record types
 * https://en.wikipedia.org/wiki/List_of_DNS_record_types
 */
export enum RecordType {
    /**
     * Address record
     */
    A='A',

    /**
     * IPv6 address record
     */
    AAAA='AAAA',

    /**
     * AFS database record 
     */
    AFSDB='AFSDB',

    /**
     * Address Prefix List 
     */
    APL='APL',

    /**
     * Certification Authority Authorization 
     */
    CAA='CAA',

    CDNSKEY='CDNSKEY',

    /**
     * Child DS 
     */
    CDS='CDS',

    /**
     * Certificate record
     */
    CERT='CERT',

    /**
     * Canonical name record
     */
    CNAME='CNAME',

    /**
     * Child-to-Parent Synchronization 
     */
    CSYNC='CSYNC',

    /**
     * DHCP identifier
     */
    DHCID='DHCID',

    /**
     * DNSSEC Lookaside Validation record
     */
    DLV='DLV',

    DNAME='DNAME',

    /**
     * DNS Key record
     */
    DNSKEY='DNSKEY',

    /**
     * Delegation signer
     */
    DS='DS',

    /**
     * MAC address (EUI-48)
     */
    EUIFOUREIGHT='EUI48',

    /**
     * MAC address (EUI-64)
     */
    EUISIXFOUR='EUI64',

    /**
     * Host Information
     */
    HINFO='HINFO',

    /**
     * Host Identity Protocol 
     */
    HIP ='HIP',

    /**
     * IPsec Key
     */
    IPSECKEY='IPSECKEY',

    /**
     * Key record
     */
    KEY='KEY',

    /**
     * Key Exchanger record 
     */
    KX ='KX',

    /**
     * Location record 
     */
    LOC='LOC',

    /**
     * Mail exchange record 
     */
    MX='MX',

    /**
     * Naming Authority Pointer 
     */
    NAPTR='NAPTR',
    
    /**
     * Name server record 
     */
    NS ='NS',

    /**
     * Next Secure record
     */
    NSEC='NSEC',

    /**
     * Next Secure record version 3
     */
    NSECTHREE='NSEC3',

    /**
     * NSEC3 parameters
     */
    NSECTHREEPARAM='NSEC3PARAM',

    /**
     * OpenPGP public key record 
     */
    OPENPGPKEY='OPENPGPKEY',

    /**
     * PTR Resource Record
     */
    PTR='PTR',

    /**
     * DNSSEC signature
     */
    RRSIG='RRSIG',

    /**
     * Responsible Person
     */
    RP='RP',

    /**
     * Signature
     */
    SIG='SIG',

    /**
     * S/MIME cert association
     */
    SMIMEA='SMIMEA',

    /**
     * Start of [a zone of] authority record 
     */
    SOA='SOA',

    /**
     * Service locator 
     */
    SRV='SRV',

    /**
     * SSH Public Key Fingerprint 
     */
    SSHFP='SSHFP',

    /**
     * DNSSEC Trust Authorities
     */
    TA='TA',

    /**
     * Transaction Key record 
     */
    TKEY='TKEY',

    /**
     * TLSA certificate association 
     */
    TLSA='TLSA',

    /**
     * Transaction Signature 
     */
    TSIG='TSIG',

    /**
     * Text record 
     */
    TXT='TXT',

    /**
     * Uniform Resource Identifier 
     */
    URI='URI',

    ZONEMD='ZONEMD'
}