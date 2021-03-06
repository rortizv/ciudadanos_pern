PGDMP     7    5                x            conteo_ciudadano_bd    12.3    12.3 a    z           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            {           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            |           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            }           1262    16621    conteo_ciudadano_bd    DATABASE     �   CREATE DATABASE conteo_ciudadano_bd WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Colombia.1252' LC_CTYPE = 'Spanish_Colombia.1252';
 #   DROP DATABASE conteo_ciudadano_bd;
                administrador    false            ~           0    0    DATABASE conteo_ciudadano_bd    ACL     �   REVOKE CONNECT,TEMPORARY ON DATABASE conteo_ciudadano_bd FROM PUBLIC;
GRANT ALL ON DATABASE conteo_ciudadano_bd TO PUBLIC;
GRANT ALL ON DATABASE conteo_ciudadano_bd TO postgres;
GRANT ALL ON DATABASE conteo_ciudadano_bd TO rafael;
                   administrador    false    2941            �            1255    16751 
   eliminar()    FUNCTION     �   CREATE FUNCTION public.eliminar() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE BEGIN
INSERT INTO respaldo VALUES(OLD.cod_municipio,OLD.nombre_municipio);
RETURN NULL;
END;
$$;
 !   DROP FUNCTION public.eliminar();
       public          postgres    false            �            1259    16624    censo_derecho    TABLE     �   CREATE TABLE public.censo_derecho (
    id_censo_derecho integer NOT NULL,
    fecha_registro date NOT NULL,
    direccion character varying(60) NOT NULL
);
 !   DROP TABLE public.censo_derecho;
       public         heap    postgres    false                       0    0    TABLE censo_derecho    ACL     �   GRANT SELECT ON TABLE public.censo_derecho TO PUBLIC;
GRANT ALL ON TABLE public.censo_derecho TO administrador;
GRANT ALL ON TABLE public.censo_derecho TO rafael;
          public          postgres    false    203            �            1259    16622 "   censo_derecho_id_censo_derecho_seq    SEQUENCE     �   CREATE SEQUENCE public.censo_derecho_id_censo_derecho_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.censo_derecho_id_censo_derecho_seq;
       public          postgres    false    203            �           0    0 "   censo_derecho_id_censo_derecho_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.censo_derecho_id_censo_derecho_seq OWNED BY public.censo_derecho.id_censo_derecho;
          public          postgres    false    202            �           0    0 +   SEQUENCE censo_derecho_id_censo_derecho_seq    ACL     �   GRANT ALL ON SEQUENCE public.censo_derecho_id_censo_derecho_seq TO administrador;
GRANT ALL ON SEQUENCE public.censo_derecho_id_censo_derecho_seq TO rafael;
          public          postgres    false    202            �            1259    16632    censo_distrital_derecho    TABLE     �   CREATE TABLE public.censo_distrital_derecho (
    id_censo_derecho_dis integer NOT NULL,
    id_fecha_registro date NOT NULL,
    fk_id_censo_derecho integer
);
 +   DROP TABLE public.censo_distrital_derecho;
       public         heap    postgres    false            �           0    0    TABLE censo_distrital_derecho    ACL     �   GRANT SELECT ON TABLE public.censo_distrital_derecho TO PUBLIC;
GRANT ALL ON TABLE public.censo_distrital_derecho TO administrador;
GRANT ALL ON TABLE public.censo_distrital_derecho TO rafael;
          public          postgres    false    205            �            1259    16630 0   censo_distrital_derecho_id_censo_derecho_dis_seq    SEQUENCE     �   CREATE SEQUENCE public.censo_distrital_derecho_id_censo_derecho_dis_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 G   DROP SEQUENCE public.censo_distrital_derecho_id_censo_derecho_dis_seq;
       public          postgres    false    205            �           0    0 0   censo_distrital_derecho_id_censo_derecho_dis_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.censo_distrital_derecho_id_censo_derecho_dis_seq OWNED BY public.censo_distrital_derecho.id_censo_derecho_dis;
          public          postgres    false    204            �           0    0 9   SEQUENCE censo_distrital_derecho_id_censo_derecho_dis_seq    ACL     �   GRANT ALL ON SEQUENCE public.censo_distrital_derecho_id_censo_derecho_dis_seq TO administrador;
GRANT ALL ON SEQUENCE public.censo_distrital_derecho_id_censo_derecho_dis_seq TO rafael;
          public          postgres    false    204            �            1259    16640    censo_distrital_hecho    TABLE     �   CREATE TABLE public.censo_distrital_hecho (
    id_censo_hecho_dis integer NOT NULL,
    id_fecha_registro_hecho date NOT NULL,
    fk_id_censo_hecho integer NOT NULL
);
 )   DROP TABLE public.censo_distrital_hecho;
       public         heap    postgres    false            �           0    0    TABLE censo_distrital_hecho    ACL     �   GRANT SELECT ON TABLE public.censo_distrital_hecho TO PUBLIC;
GRANT ALL ON TABLE public.censo_distrital_hecho TO administrador;
GRANT ALL ON TABLE public.censo_distrital_hecho TO rafael;
          public          postgres    false    207            �            1259    16638 ,   censo_distrital_hecho_id_censo_hecho_dis_seq    SEQUENCE     �   CREATE SEQUENCE public.censo_distrital_hecho_id_censo_hecho_dis_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 C   DROP SEQUENCE public.censo_distrital_hecho_id_censo_hecho_dis_seq;
       public          postgres    false    207            �           0    0 ,   censo_distrital_hecho_id_censo_hecho_dis_seq    SEQUENCE OWNED BY     }   ALTER SEQUENCE public.censo_distrital_hecho_id_censo_hecho_dis_seq OWNED BY public.censo_distrital_hecho.id_censo_hecho_dis;
          public          postgres    false    206            �           0    0 5   SEQUENCE censo_distrital_hecho_id_censo_hecho_dis_seq    ACL     �   GRANT ALL ON SEQUENCE public.censo_distrital_hecho_id_censo_hecho_dis_seq TO administrador;
GRANT ALL ON SEQUENCE public.censo_distrital_hecho_id_censo_hecho_dis_seq TO rafael;
          public          postgres    false    206            �            1259    16648    censo_hecho    TABLE     �   CREATE TABLE public.censo_hecho (
    id_censo_hecho integer NOT NULL,
    fecha_inicio_residencia date,
    direccion character varying(50) DEFAULT NULL::character varying,
    pais_residencia character varying(50) DEFAULT NULL::character varying
);
    DROP TABLE public.censo_hecho;
       public         heap    postgres    false            �           0    0    TABLE censo_hecho    ACL     �   GRANT SELECT ON TABLE public.censo_hecho TO PUBLIC;
GRANT ALL ON TABLE public.censo_hecho TO administrador;
GRANT ALL ON TABLE public.censo_hecho TO rafael;
          public          postgres    false    209            �            1259    16646    censo_hecho_id_censo_hecho_seq    SEQUENCE     �   CREATE SEQUENCE public.censo_hecho_id_censo_hecho_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.censo_hecho_id_censo_hecho_seq;
       public          postgres    false    209            �           0    0    censo_hecho_id_censo_hecho_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.censo_hecho_id_censo_hecho_seq OWNED BY public.censo_hecho.id_censo_hecho;
          public          postgres    false    208            �           0    0 '   SEQUENCE censo_hecho_id_censo_hecho_seq    ACL     �   GRANT ALL ON SEQUENCE public.censo_hecho_id_censo_hecho_seq TO administrador;
GRANT ALL ON SEQUENCE public.censo_hecho_id_censo_hecho_seq TO rafael;
          public          postgres    false    208            �            1259    16658    distrito    TABLE     �   CREATE TABLE public.distrito (
    cod_distrito numeric NOT NULL,
    nombre_distrito character varying(100) DEFAULT NULL::character varying,
    fk_cod_municipio integer NOT NULL,
    fk_cod_provincia integer NOT NULL
);
    DROP TABLE public.distrito;
       public         heap    postgres    false            �           0    0    TABLE distrito    ACL     �   GRANT SELECT ON TABLE public.distrito TO PUBLIC;
GRANT ALL ON TABLE public.distrito TO administrador;
GRANT ALL ON TABLE public.distrito TO rafael;
          public          postgres    false    211            �            1259    16656    distrito_cod_distrito_seq    SEQUENCE     �   CREATE SEQUENCE public.distrito_cod_distrito_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.distrito_cod_distrito_seq;
       public          postgres    false    211            �           0    0    distrito_cod_distrito_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.distrito_cod_distrito_seq OWNED BY public.distrito.cod_distrito;
          public          postgres    false    210            �           0    0 "   SEQUENCE distrito_cod_distrito_seq    ACL     �   GRANT ALL ON SEQUENCE public.distrito_cod_distrito_seq TO administrador;
GRANT ALL ON SEQUENCE public.distrito_cod_distrito_seq TO rafael;
          public          postgres    false    210            �            1259    16667 	   municipio    TABLE     �   CREATE TABLE public.municipio (
    cod_municipio integer NOT NULL,
    nombre_municipio character varying(100) NOT NULL,
    fk_cod_provincia integer NOT NULL
);
    DROP TABLE public.municipio;
       public         heap    postgres    false            �           0    0    TABLE municipio    ACL     �   GRANT SELECT ON TABLE public.municipio TO PUBLIC;
GRANT ALL ON TABLE public.municipio TO administrador;
GRANT ALL ON TABLE public.municipio TO rafael;
          public          postgres    false    213            �            1259    16665    municipio_cod_municipio_seq    SEQUENCE     �   CREATE SEQUENCE public.municipio_cod_municipio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.municipio_cod_municipio_seq;
       public          postgres    false    213            �           0    0    municipio_cod_municipio_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.municipio_cod_municipio_seq OWNED BY public.municipio.cod_municipio;
          public          postgres    false    212            �           0    0 $   SEQUENCE municipio_cod_municipio_seq    ACL     �   GRANT ALL ON SEQUENCE public.municipio_cod_municipio_seq TO administrador;
GRANT ALL ON SEQUENCE public.municipio_cod_municipio_seq TO rafael;
          public          postgres    false    212            �            1259    16675    persona    TABLE     �  CREATE TABLE public.persona (
    numero_doc integer NOT NULL,
    nombre character varying(50) DEFAULT NULL::character varying,
    apellidos character varying(50) DEFAULT NULL::character varying,
    fecha_nacimiento date,
    tipo_doc character varying(50) DEFAULT NULL::character varying,
    edad character varying(5) DEFAULT NULL::character varying,
    estatura character varying DEFAULT NULL::character varying,
    situacion_militar character varying(15) DEFAULT NULL::character varying,
    sexo character varying(10) DEFAULT NULL::character varying,
    nivel_de_estudios character varying(15) DEFAULT NULL::character varying,
    fk_persona_cod_municipio integer
);
    DROP TABLE public.persona;
       public         heap    postgres    false            �           0    0    TABLE persona    ACL     �   GRANT SELECT ON TABLE public.persona TO PUBLIC;
GRANT ALL ON TABLE public.persona TO administrador;
GRANT ALL ON TABLE public.persona TO rafael;
          public          postgres    false    215            �            1259    16673    persona_numero_doc_seq    SEQUENCE     �   CREATE SEQUENCE public.persona_numero_doc_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.persona_numero_doc_seq;
       public          postgres    false    215            �           0    0    persona_numero_doc_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.persona_numero_doc_seq OWNED BY public.persona.numero_doc;
          public          postgres    false    214            �           0    0    SEQUENCE persona_numero_doc_seq    ACL     �   GRANT ALL ON SEQUENCE public.persona_numero_doc_seq TO administrador;
GRANT ALL ON SEQUENCE public.persona_numero_doc_seq TO rafael;
          public          postgres    false    214            �            1259    16693 	   provincia    TABLE     {   CREATE TABLE public.provincia (
    cod_provincia integer NOT NULL,
    nombre_provincia character varying(50) NOT NULL
);
    DROP TABLE public.provincia;
       public         heap    postgres    false            �           0    0    TABLE provincia    ACL     �   GRANT SELECT ON TABLE public.provincia TO PUBLIC;
GRANT ALL ON TABLE public.provincia TO administrador;
GRANT ALL ON TABLE public.provincia TO rafael;
          public          postgres    false    217            �            1259    16691    provincia_cod_provincia_seq    SEQUENCE     �   CREATE SEQUENCE public.provincia_cod_provincia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.provincia_cod_provincia_seq;
       public          postgres    false    217            �           0    0    provincia_cod_provincia_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.provincia_cod_provincia_seq OWNED BY public.provincia.cod_provincia;
          public          postgres    false    216            �           0    0 $   SEQUENCE provincia_cod_provincia_seq    ACL     �   GRANT ALL ON SEQUENCE public.provincia_cod_provincia_seq TO administrador;
GRANT ALL ON SEQUENCE public.provincia_cod_provincia_seq TO rafael;
          public          postgres    false    216            �            1259    16735    respaldo    TABLE     �   CREATE TABLE public.respaldo (
    cod_municipio integer DEFAULT nextval('public.municipio_cod_municipio_seq'::regclass) NOT NULL,
    nombre_municipio character varying(100) NOT NULL
);
    DROP TABLE public.respaldo;
       public         heap    administrador    false    212            �           0    0    TABLE respaldo    ACL     .   GRANT ALL ON TABLE public.respaldo TO PUBLIC;
          public          administrador    false    218            �            1259    16783    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(200) NOT NULL,
    email character varying(200) NOT NULL,
    password character varying(200) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �           0    0    TABLE users    ACL     ]   GRANT ALL ON TABLE public.users TO PUBLIC;
GRANT ALL ON TABLE public.users TO administrador;
          public          postgres    false    220            �            1259    16781    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            �
           2604    16627    censo_derecho id_censo_derecho    DEFAULT     �   ALTER TABLE ONLY public.censo_derecho ALTER COLUMN id_censo_derecho SET DEFAULT nextval('public.censo_derecho_id_censo_derecho_seq'::regclass);
 M   ALTER TABLE public.censo_derecho ALTER COLUMN id_censo_derecho DROP DEFAULT;
       public          postgres    false    203    202    203            �
           2604    16635 ,   censo_distrital_derecho id_censo_derecho_dis    DEFAULT     �   ALTER TABLE ONLY public.censo_distrital_derecho ALTER COLUMN id_censo_derecho_dis SET DEFAULT nextval('public.censo_distrital_derecho_id_censo_derecho_dis_seq'::regclass);
 [   ALTER TABLE public.censo_distrital_derecho ALTER COLUMN id_censo_derecho_dis DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16643 (   censo_distrital_hecho id_censo_hecho_dis    DEFAULT     �   ALTER TABLE ONLY public.censo_distrital_hecho ALTER COLUMN id_censo_hecho_dis SET DEFAULT nextval('public.censo_distrital_hecho_id_censo_hecho_dis_seq'::regclass);
 W   ALTER TABLE public.censo_distrital_hecho ALTER COLUMN id_censo_hecho_dis DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16651    censo_hecho id_censo_hecho    DEFAULT     �   ALTER TABLE ONLY public.censo_hecho ALTER COLUMN id_censo_hecho SET DEFAULT nextval('public.censo_hecho_id_censo_hecho_seq'::regclass);
 I   ALTER TABLE public.censo_hecho ALTER COLUMN id_censo_hecho DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    16722    distrito cod_distrito    DEFAULT     ~   ALTER TABLE ONLY public.distrito ALTER COLUMN cod_distrito SET DEFAULT nextval('public.distrito_cod_distrito_seq'::regclass);
 D   ALTER TABLE public.distrito ALTER COLUMN cod_distrito DROP DEFAULT;
       public          postgres    false    211    210    211            �
           2604    16670    municipio cod_municipio    DEFAULT     �   ALTER TABLE ONLY public.municipio ALTER COLUMN cod_municipio SET DEFAULT nextval('public.municipio_cod_municipio_seq'::regclass);
 F   ALTER TABLE public.municipio ALTER COLUMN cod_municipio DROP DEFAULT;
       public          postgres    false    213    212    213            �
           2604    16678    persona numero_doc    DEFAULT     x   ALTER TABLE ONLY public.persona ALTER COLUMN numero_doc SET DEFAULT nextval('public.persona_numero_doc_seq'::regclass);
 A   ALTER TABLE public.persona ALTER COLUMN numero_doc DROP DEFAULT;
       public          postgres    false    214    215    215            �
           2604    16696    provincia cod_provincia    DEFAULT     �   ALTER TABLE ONLY public.provincia ALTER COLUMN cod_provincia SET DEFAULT nextval('public.provincia_cod_provincia_seq'::regclass);
 F   ALTER TABLE public.provincia ALTER COLUMN cod_provincia DROP DEFAULT;
       public          postgres    false    216    217    217            �
           2604    16786    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            f          0    16624    censo_derecho 
   TABLE DATA           T   COPY public.censo_derecho (id_censo_derecho, fecha_registro, direccion) FROM stdin;
    public          postgres    false    203   (w       h          0    16632    censo_distrital_derecho 
   TABLE DATA           o   COPY public.censo_distrital_derecho (id_censo_derecho_dis, id_fecha_registro, fk_id_censo_derecho) FROM stdin;
    public          postgres    false    205   �w       j          0    16640    censo_distrital_hecho 
   TABLE DATA           o   COPY public.censo_distrital_hecho (id_censo_hecho_dis, id_fecha_registro_hecho, fk_id_censo_hecho) FROM stdin;
    public          postgres    false    207   �w       l          0    16648    censo_hecho 
   TABLE DATA           j   COPY public.censo_hecho (id_censo_hecho, fecha_inicio_residencia, direccion, pais_residencia) FROM stdin;
    public          postgres    false    209   �w       n          0    16658    distrito 
   TABLE DATA           e   COPY public.distrito (cod_distrito, nombre_distrito, fk_cod_municipio, fk_cod_provincia) FROM stdin;
    public          postgres    false    211   �x       p          0    16667 	   municipio 
   TABLE DATA           V   COPY public.municipio (cod_municipio, nombre_municipio, fk_cod_provincia) FROM stdin;
    public          postgres    false    213   By       r          0    16675    persona 
   TABLE DATA           �   COPY public.persona (numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio) FROM stdin;
    public          postgres    false    215   �y       t          0    16693 	   provincia 
   TABLE DATA           D   COPY public.provincia (cod_provincia, nombre_provincia) FROM stdin;
    public          postgres    false    217   �z       u          0    16735    respaldo 
   TABLE DATA           C   COPY public.respaldo (cod_municipio, nombre_municipio) FROM stdin;
    public          administrador    false    218   w{       w          0    16783    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public          postgres    false    220   �{       �           0    0 "   censo_derecho_id_censo_derecho_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.censo_derecho_id_censo_derecho_seq', 6, true);
          public          postgres    false    202            �           0    0 0   censo_distrital_derecho_id_censo_derecho_dis_seq    SEQUENCE SET     _   SELECT pg_catalog.setval('public.censo_distrital_derecho_id_censo_derecho_dis_seq', 1, false);
          public          postgres    false    204            �           0    0 ,   censo_distrital_hecho_id_censo_hecho_dis_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public.censo_distrital_hecho_id_censo_hecho_dis_seq', 2, true);
          public          postgres    false    206            �           0    0    censo_hecho_id_censo_hecho_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.censo_hecho_id_censo_hecho_seq', 5, true);
          public          postgres    false    208            �           0    0    distrito_cod_distrito_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.distrito_cod_distrito_seq', 1, false);
          public          postgres    false    210            �           0    0    municipio_cod_municipio_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.municipio_cod_municipio_seq', 8, true);
          public          postgres    false    212            �           0    0    persona_numero_doc_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.persona_numero_doc_seq', 1, false);
          public          postgres    false    214            �           0    0    provincia_cod_provincia_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.provincia_cod_provincia_seq', 25, true);
          public          postgres    false    216            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    219            �
           2606    16629     censo_derecho censo_derecho_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.censo_derecho
    ADD CONSTRAINT censo_derecho_pkey PRIMARY KEY (id_censo_derecho);
 J   ALTER TABLE ONLY public.censo_derecho DROP CONSTRAINT censo_derecho_pkey;
       public            postgres    false    203            �
           2606    16637 4   censo_distrital_derecho censo_distrital_derecho_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.censo_distrital_derecho
    ADD CONSTRAINT censo_distrital_derecho_pkey PRIMARY KEY (id_censo_derecho_dis);
 ^   ALTER TABLE ONLY public.censo_distrital_derecho DROP CONSTRAINT censo_distrital_derecho_pkey;
       public            postgres    false    205            �
           2606    16645 0   censo_distrital_hecho censo_distrital_hecho_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.censo_distrital_hecho
    ADD CONSTRAINT censo_distrital_hecho_pkey PRIMARY KEY (id_censo_hecho_dis);
 Z   ALTER TABLE ONLY public.censo_distrital_hecho DROP CONSTRAINT censo_distrital_hecho_pkey;
       public            postgres    false    207            �
           2606    16655    censo_hecho censo_hecho_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.censo_hecho
    ADD CONSTRAINT censo_hecho_pkey PRIMARY KEY (id_censo_hecho);
 F   ALTER TABLE ONLY public.censo_hecho DROP CONSTRAINT censo_hecho_pkey;
       public            postgres    false    209            �
           2606    16724    distrito distrito_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT distrito_pkey PRIMARY KEY (cod_distrito);
 @   ALTER TABLE ONLY public.distrito DROP CONSTRAINT distrito_pkey;
       public            postgres    false    211            �
           2606    16672    municipio municipio_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT municipio_pkey PRIMARY KEY (cod_municipio);
 B   ALTER TABLE ONLY public.municipio DROP CONSTRAINT municipio_pkey;
       public            postgres    false    213            �
           2606    16688    persona persona_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.persona
    ADD CONSTRAINT persona_pkey PRIMARY KEY (numero_doc);
 >   ALTER TABLE ONLY public.persona DROP CONSTRAINT persona_pkey;
       public            postgres    false    215            �
           2606    16698    provincia provincia_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.provincia
    ADD CONSTRAINT provincia_pkey PRIMARY KEY (cod_provincia);
 B   ALTER TABLE ONLY public.provincia DROP CONSTRAINT provincia_pkey;
       public            postgres    false    217            �
           2606    16793    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    220            �
           2606    16791    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220            �
           2620    16752    municipio insertar_eliminados    TRIGGER     u   CREATE TRIGGER insertar_eliminados AFTER DELETE ON public.municipio FOR EACH ROW EXECUTE FUNCTION public.eliminar();
 6   DROP TRIGGER insertar_eliminados ON public.municipio;
       public          postgres    false    221    213            �
           2606    16699    censo_distrital_derecho fktest    FK CONSTRAINT     �   ALTER TABLE ONLY public.censo_distrital_derecho
    ADD CONSTRAINT fktest FOREIGN KEY (fk_id_censo_derecho) REFERENCES public.censo_derecho(id_censo_derecho);
 H   ALTER TABLE ONLY public.censo_distrital_derecho DROP CONSTRAINT fktest;
       public          postgres    false    2767    203    205            �
           2606    16704    censo_distrital_hecho fktest    FK CONSTRAINT     �   ALTER TABLE ONLY public.censo_distrital_hecho
    ADD CONSTRAINT fktest FOREIGN KEY (fk_id_censo_hecho) REFERENCES public.censo_hecho(id_censo_hecho);
 F   ALTER TABLE ONLY public.censo_distrital_hecho DROP CONSTRAINT fktest;
       public          postgres    false    209    2773    207            �
           2606    16709    municipio fktest    FK CONSTRAINT     �   ALTER TABLE ONLY public.municipio
    ADD CONSTRAINT fktest FOREIGN KEY (fk_cod_provincia) REFERENCES public.provincia(cod_provincia);
 :   ALTER TABLE ONLY public.municipio DROP CONSTRAINT fktest;
       public          postgres    false    213    217    2781            �
           2606    16714    distrito fktest    FK CONSTRAINT     �   ALTER TABLE ONLY public.distrito
    ADD CONSTRAINT fktest FOREIGN KEY (fk_cod_municipio) REFERENCES public.municipio(cod_municipio);
 9   ALTER TABLE ONLY public.distrito DROP CONSTRAINT fktest;
       public          postgres    false    211    2777    213            �           826    16721    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     �   ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT,INSERT,DELETE,UPDATE ON TABLES  TO administrador;
          public          postgres    false            �           826    16719    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     �   ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO PUBLIC;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO administrador;
                   postgres    false            f   r   x�ʱ
1 �9���@$9쨸
�p�K�k�:��{��m`QցE�h�a�[�}�����-ڻ�}�|��)%��+���F��y���{E�V��.��'�l4Ƶ���"� �� �      h      x������ � �      j   (   x�3�420��50�52�4�2q�t�u�9��b���� hh�      l   �   x�m�=n�0��:/�@R��Ӣ�RAt�B�D@@��An��c�����ܙ�t୷�}�|�I3F��i��8ߡ��Ԭ�6�9��2+�g�7��a��&Id�BmS٢ai��J�KJ]h�W�r2O%�R���V�e�L�K�D�O��M�����iМv�h���=����5�b{��ԉ���"Ӎs�ԛ�1�=MA      n   V   x�34��qTp�,.)�L.�4�44�24�N�
���#�,8͸�9�r�2S�BR+��`�f��9�
�9%��r1z\\\ �9      p   ~   x��1�0�W��	I�D4�HC(i�`EF`K''O�|;ݎ4�5�Njy�������ꩉ�e��[���J�>��@#NE]`�Zt������9�G	8�3.��d��7������i�����ZD�l�%�      r     x�m��N�0���S�,�@��R7�m�;o�\���1<�g�hL���9�rΟ$�+!RX��,0��)V��&̾zݾo5��BH��m���mQ�f� �ޞ�4(d��nGGo�;��PQ��SN��+8�m�2�C[O�2����'Ӛ7��*��bD�0�����C��p��7�o����It$�$F��,�A�v��#-+�)�_�ϱ�2�y
S:�ýn���G���KZ���ziR�����<���"�o�gp�      t   �   x�-�1!��z�a�˺j�ڬ���I$a!a�bo�,<��_|��K�����P��M�n�sq���!{��~q�k1ɊZCۙIz���g�J����'ʀ�f��3�?��Ҡ�jg�j��%G��D��@+�      u   "   x�34�tL�8���А3 3/3''��+F��� jKZ      w      x������ � �     