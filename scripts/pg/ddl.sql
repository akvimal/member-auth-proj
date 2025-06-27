-- public.members definition

-- Drop table

-- DROP TABLE public.members;

CREATE TABLE public.members (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	full_name varchar NOT NULL,
	member_id varchar NOT NULL, -- Member ID
	birth_date date NULL,
	CONSTRAINT members_pk PRIMARY KEY (id),
	CONSTRAINT members_unique UNIQUE (member_id)
);

-- Column comments

COMMENT ON COLUMN public.members.member_id IS 'Member ID';


-- public.member_authorizations definition

-- Drop table

-- DROP TABLE public.member_authorizations;

CREATE TABLE public.member_authorizations (
	member_id varchar NOT NULL,
	receive_date date NULL,
	prior_auth_no varchar NULL,
	auth_status varchar NULL,
	id serial4 NOT NULL,
	insurance_plan varchar NULL,
	patient_name varchar NULL,
	patient_birth_date date NULL,
	patient_phone varchar NULL,
	provider_name varchar NULL,
	provider_npi varchar NULL,
	provider_tax_id varchar NULL,
	provider_phone varchar NULL,
	provider_fax varchar NULL,
	provider_facility_name varchar NULL,
	provider_facility_address varchar NULL,
	clinical_notes varchar NULL,
	urgency_type varchar NULL,
	"comments" varchar NULL,
	submit_by varchar NULL,
	submit_date varchar NULL,
	submit_contact varchar NULL,
	service_begin_date date NULL,
	service_end_date date NULL,
	service_type_standard varchar NULL,
	service_type_other varchar NULL,
	diagnosis_codes varchar NULL,
	procedure_codes varchar NULL,
	service_description varchar NULL,
	CONSTRAINT member_authorizations_pk PRIMARY KEY (id)
);


-- public.member_docs_metadata definition

-- Drop table

-- DROP TABLE public.member_docs_metadata;

CREATE TABLE public.member_docs_metadata (
	member_id varchar NOT NULL,
	document_path varchar NULL,
	document_title varchar NULL,
	document_category varchar NULL,
	create_date date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	document_type varchar DEFAULT 'pdf'::character varying NOT NULL,
	id serial4 NOT NULL,
	channel varchar DEFAULT 'Web'::character varying NOT NULL,
	CONSTRAINT member_docs_metadata_pk PRIMARY KEY (id),
	CONSTRAINT member_docs_metadata_unique UNIQUE (member_id, document_path)
);


-- public.member_docs_vectors definition

-- Drop table

-- DROP TABLE public.member_docs_vectors;

CREATE TABLE public.member_docs_vectors (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"text" text NULL,
	metadata jsonb NULL,
	embedding public.vector NULL,
	CONSTRAINT member_documents_pg_pkey PRIMARY KEY (id)
);


-- public.n8n_chat_histories definition

-- Drop table

-- DROP TABLE public.n8n_chat_histories;

CREATE TABLE public.n8n_chat_histories (
	id serial4 NOT NULL,
	session_id varchar(255) NOT NULL,
	message jsonb NOT NULL,
	CONSTRAINT n8n_chat_histories_pkey PRIMARY KEY (id)
);