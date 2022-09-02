var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "ebef5329f1a2b1c7f04a76acb81c4e77", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "a63de7ebef5a8b5b04609e9b66076b4e.h", "FileName": "crypto/objects/obj_lcl.h", "Line": 11, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": [" * in the file LICENSE in the source distribution or at", " * https://www.openssl.org/source/license.html", " */", "", "typedef struct name_funcs_st NAME_FUNCS;", "DEFINE_STACK_OF(NAME_FUNCS)", "DEFINE_LHASH_OF(OBJ_NAME);", "typedef struct added_obj_st ADDED_OBJ;", "DEFINE_LHASH_OF(ADDED_OBJ);"], "SrcStart": 6}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 127, "Tip": "Function <b>sk_NAME_FUNCS_value</b> executes and stores the return value to <b>name_funcs</b> (<b>name_funcs</b> can be null)", "SrcLines": ["            OPENSSL_free(name_funcs);", "            ret = 0;", "            goto out;", "        }", "    }", "    name_funcs = sk_NAME_FUNCS_value(name_funcs_stack, ret);", "    if (hash_func != NULL)", "        name_funcs->hash_func = hash_func;", "    if (cmp_func != NULL)", "        name_funcs->cmp_func = cmp_func;"], "SrcStart": 122}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 129, "Tip": "Store <b>hash_func</b> to <b>name_funcs-&gt;hash_func</b>", "SrcLines": ["            goto out;", "        }", "    }", "    name_funcs = sk_NAME_FUNCS_value(name_funcs_stack, ret);", "    if (hash_func != NULL)", "        name_funcs->hash_func = hash_func;", "    if (cmp_func != NULL)", "        name_funcs->cmp_func = cmp_func;", "    if (free_func != NULL)", "        name_funcs->free_func = free_func;"], "SrcStart": 124}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/o_names.c", "Line": 129}, {"HashID": "c0b42bb17d978e1f64b32b7bb5c9fb10", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "a63de7ebef5a8b5b04609e9b66076b4e.h", "FileName": "crypto/objects/obj_lcl.h", "Line": 11, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": [" * in the file LICENSE in the source distribution or at", " * https://www.openssl.org/source/license.html", " */", "", "typedef struct name_funcs_st NAME_FUNCS;", "DEFINE_STACK_OF(NAME_FUNCS)", "DEFINE_LHASH_OF(OBJ_NAME);", "typedef struct added_obj_st ADDED_OBJ;", "DEFINE_LHASH_OF(ADDED_OBJ);"], "SrcStart": 6}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 148, "Tip": "Function <b>sk_NAME_FUNCS_value</b> executes and returns", "SrcLines": ["", "    ret = a->type - b->type;", "    if (ret == 0) {", "        if ((name_funcs_stack != NULL)", "            && (sk_NAME_FUNCS_num(name_funcs_stack) > a->type)) {", "            ret = sk_NAME_FUNCS_value(name_funcs_stack,", "                                      a->type)->cmp_func(a->name, b->name);", "        } else", "            ret = strcasecmp(a->name, b->name);", "    }"], "SrcStart": 143}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 148, "Tip": "Load value from <b>sk_NAME_FUNCS_value(name_funcs_stack,a-&gt;gp_offset)-&gt;cmp_func</b>", "SrcLines": ["", "    ret = a->type - b->type;", "    if (ret == 0) {", "        if ((name_funcs_stack != NULL)", "            && (sk_NAME_FUNCS_num(name_funcs_stack) > a->type)) {", "            ret = sk_NAME_FUNCS_value(name_funcs_stack,", "                                      a->type)->cmp_func(a->name, b->name);", "        } else", "            ret = strcasecmp(a->name, b->name);", "    }"], "SrcStart": 143}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/o_names.c", "Line": 148}, {"HashID": "6e5708ddd02e4ebb6ddceda0a58f30d5", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "a63de7ebef5a8b5b04609e9b66076b4e.h", "FileName": "crypto/objects/obj_lcl.h", "Line": 11, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": [" * in the file LICENSE in the source distribution or at", " * https://www.openssl.org/source/license.html", " */", "", "typedef struct name_funcs_st NAME_FUNCS;", "DEFINE_STACK_OF(NAME_FUNCS)", "DEFINE_LHASH_OF(OBJ_NAME);", "typedef struct added_obj_st ADDED_OBJ;", "DEFINE_LHASH_OF(ADDED_OBJ);"], "SrcStart": 6}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 163, "Tip": "Function <b>sk_NAME_FUNCS_value</b> executes and returns", "SrcLines": ["    unsigned long ret;", "", "    if ((name_funcs_stack != NULL)", "        && (sk_NAME_FUNCS_num(name_funcs_stack) > a->type)) {", "        ret =", "            sk_NAME_FUNCS_value(name_funcs_stack,", "                                a->type)->hash_func(a->name);", "    } else {", "        ret = openssl_lh_strcasehash(a->name);", "    }"], "SrcStart": 158}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 163, "Tip": "Load value from <b>sk_NAME_FUNCS_value(name_funcs_stack,a-&gt;gp_offset)-&gt;hash_func</b>", "SrcLines": ["    unsigned long ret;", "", "    if ((name_funcs_stack != NULL)", "        && (sk_NAME_FUNCS_num(name_funcs_stack) > a->type)) {", "        ret =", "            sk_NAME_FUNCS_value(name_funcs_stack,", "                                a->type)->hash_func(a->name);", "    } else {", "        ret = openssl_lh_strcasehash(a->name);", "    }"], "SrcStart": 158}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/o_names.c", "Line": 163}, {"HashID": "95910c86444b53161d8adc406565488a", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "a63de7ebef5a8b5b04609e9b66076b4e.h", "FileName": "crypto/objects/obj_lcl.h", "Line": 11, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": [" * in the file LICENSE in the source distribution or at", " * https://www.openssl.org/source/license.html", " */", "", "typedef struct name_funcs_st NAME_FUNCS;", "DEFINE_STACK_OF(NAME_FUNCS)", "DEFINE_LHASH_OF(OBJ_NAME);", "typedef struct added_obj_st ADDED_OBJ;", "DEFINE_LHASH_OF(ADDED_OBJ);"], "SrcStart": 6}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 283, "Tip": "Function <b>sk_NAME_FUNCS_value</b> executes and returns", "SrcLines": ["            && (sk_NAME_FUNCS_num(name_funcs_stack) > ret->type)) {", "            /*", "             * XXX: I'm not sure I understand why the free function should", "             * get three arguments... -- Richard Levitte", "             */", "            sk_NAME_FUNCS_value(name_funcs_stack,", "                                ret->type)->free_func(ret->name, ret->type,", "                                                      ret->data);", "        }", "        OPENSSL_free(ret);"], "SrcStart": 278}, {"FileMD5": "b200d575c8b0ce8ae781d50f772f1f6d.c", "FileName": "crypto/objects/o_names.c", "Line": 283, "Tip": "Load value from <b>sk_NAME_FUNCS_value(name_funcs_stack,ret-&gt;gp_offset)-&gt;free_func</b>", "SrcLines": ["            && (sk_NAME_FUNCS_num(name_funcs_stack) > ret->type)) {", "            /*", "             * XXX: I'm not sure I understand why the free function should", "             * get three arguments... -- Richard Levitte", "             */", "            sk_NAME_FUNCS_value(name_funcs_stack,", "                                ret->type)->free_func(ret->name, ret->type,", "                                                      ret->data);", "        }", "        OPENSSL_free(ret);"], "SrcStart": 278}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/o_names.c", "Line": 283}, {"HashID": "dcb8ceec83ddb8d11f9d08da5326a69d", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "eb8a99720a2476c97b321b8d2f430131.c", "FileName": "crypto/x509/x509_v3.c", "Line": 219, "Tip": "Return <b>null</b> to caller", "SrcLines": ["ASN1_OBJECT *X509_EXTENSION_get_object(X509_EXTENSION *ex)", "{", "    if (ex == NULL)", "        return (NULL);", "    return (ex->object);", "}", "", "ASN1_OCTET_STRING *X509_EXTENSION_get_data(X509_EXTENSION *ex)", "{", "    if (ex == NULL)"], "SrcStart": 214}, {"FileMD5": "0bbfba2ef1be9a63895d6b8e60dd335e.c", "FileName": "crypto/x509v3/v3_conf.c", "Line": 287, "Tip": "Function <b>X509_EXTENSION_get_object</b> executes and stores the return value to <b>obj</b> (<b>obj</b> can be null)", "SrcLines": ["", "static void delete_ext(STACK_OF(X509_EXTENSION) *sk, X509_EXTENSION *dext)", "{", "    int idx;", "    ASN1_OBJECT *obj;", "    obj = X509_EXTENSION_get_object(dext);", "    while ((idx = X509v3_get_ext_by_OBJ(sk, obj, -1)) >= 0) {", "        X509_EXTENSION *tmpext = X509v3_get_ext(sk, idx);", "        X509v3_delete_ext(sk, idx);", "        X509_EXTENSION_free(tmpext);"], "SrcStart": 282}, {"FileMD5": "0bbfba2ef1be9a63895d6b8e60dd335e.c", "FileName": "crypto/x509v3/v3_conf.c", "Line": 288, "Tip": "<b>obj</b> is used as the 2nd parameter in function <b>X509v3_get_ext_by_OBJ</b> (<b>obj</b> can be null)", "SrcLines": ["static void delete_ext(STACK_OF(X509_EXTENSION) *sk, X509_EXTENSION *dext)", "{", "    int idx;", "    ASN1_OBJECT *obj;", "    obj = X509_EXTENSION_get_object(dext);", "    while ((idx = X509v3_get_ext_by_OBJ(sk, obj, -1)) >= 0) {", "        X509_EXTENSION *tmpext = X509v3_get_ext(sk, idx);", "        X509v3_delete_ext(sk, idx);", "        X509_EXTENSION_free(tmpext);", "    }"], "SrcStart": 283}, {"FileMD5": "eb8a99720a2476c97b321b8d2f430131.c", "FileName": "crypto/x509/x509_v3.c", "Line": 52, "Tip": "<b>obj</b> is used as the 2nd parameter in function <b>OBJ_cmp</b> (<b>obj</b> can be null)", "SrcLines": ["    if (lastpos < 0)", "        lastpos = 0;", "    n = sk_X509_EXTENSION_num(sk);", "    for (; lastpos < n; lastpos++) {", "        ex = sk_X509_EXTENSION_value(sk, lastpos);", "        if (OBJ_cmp(ex->object, obj) == 0)", "            return (lastpos);", "    }", "    return (-1);", "}"], "SrcStart": 47}, {"FileMD5": "535632da15f80f74a55909364d99564c.c", "FileName": "crypto/objects/obj_lib.c", "Line": 62, "Tip": "Load value from <b>b-&gt;length</b>", "SrcLines": ["", "int OBJ_cmp(const ASN1_OBJECT *a, const ASN1_OBJECT *b)", "{", "    int ret;", "", "    ret = (a->length - b->length);", "    if (ret)", "        return (ret);", "    return (memcmp(a->data, b->data, a->length));", "}"], "SrcStart": 57}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/obj_lib.c", "Line": 62}, {"HashID": "64ddcbd5e5d84aa8339f74ca187e4a7a", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "b365cfc6694d8c399fee39d9c232719d.h", "FileName": "crypto/objects/obj_xref.h", "Line": 20, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    int sign_id;", "    int hash_id;", "    int pkey_id;", "} nid_triple;", "", "DEFINE_STACK_OF(nid_triple)", "", "static const nid_triple sigoid_srt[] = {", "    {NID_md2WithRSAEncryption, NID_md2, NID_rsaEncryption},", "    {NID_md5WithRSAEncryption, NID_md5, NID_rsaEncryption},"], "SrcStart": 15}, {"FileMD5": "c5623a6ef106360a11e6ccf6a535ca82.c", "FileName": "crypto/objects/obj_xref.c", "Line": 79, "Tip": "Store the return value of function <b>sk_nid_triple_value</b> to <b>t</b>", "SrcLines": ["    tmp.pkey_id = pkey_nid;", "", "    if (sigx_app) {", "        int idx = sk_nid_triple_find(sigx_app, &tmp);", "        if (idx >= 0) {", "            t = sk_nid_triple_value(sigx_app, idx);", "            rv = &t;", "        }", "    }", "#ifndef OBJ_XREF_TEST2"], "SrcStart": 74}, {"FileMD5": "c5623a6ef106360a11e6ccf6a535ca82.c", "FileName": "crypto/objects/obj_xref.c", "Line": 91, "Tip": "Load value from <b>rv</b>", "SrcLines": ["    }", "#endif", "    if (rv == NULL)", "        return 0;", "    if (psignid)", "        *psignid = (*rv)->sign_id;", "    return 1;", "}", "", "int OBJ_add_sigid(int signid, int dig_id, int pkey_id)"], "SrcStart": 86}, {"FileMD5": "c5623a6ef106360a11e6ccf6a535ca82.c", "FileName": "crypto/objects/obj_xref.c", "Line": 91, "Tip": "Load value from <b>rv-&gt;sign_id</b>", "SrcLines": ["    }", "#endif", "    if (rv == NULL)", "        return 0;", "    if (psignid)", "        *psignid = (*rv)->sign_id;", "    return 1;", "}", "", "int OBJ_add_sigid(int signid, int dig_id, int pkey_id)"], "SrcStart": 86}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/objects/obj_xref.c", "Line": 91}, {"HashID": "855de34009ff8ea2bc3943f3e6d339cc", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "28ce60d573d6953901c7eeef12e1c432.h", "FileName": "include/openssl/ocsp.h", "Line": 105, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["#  define V_OCSP_CERTSTATUS_UNKNOWN 2", "", "typedef struct ocsp_cert_status_st OCSP_CERTSTATUS;", "typedef struct ocsp_single_response_st OCSP_SINGLERESP;", "", "DEFINE_STACK_OF(OCSP_SINGLERESP)", "", "typedef struct ocsp_response_data_st OCSP_RESPDATA;", "", "typedef struct ocsp_basic_response_st OCSP_BASICRESP;"], "SrcStart": 100}, {"FileMD5": "20599ca5fb727bf37a0f38ed944841c7.c", "FileName": "crypto/ocsp/ocsp_cl.c", "Line": 242, "Tip": "Function <b>sk_OCSP_SINGLERESP_value</b> executes and stores the return value to <b>single</b> (<b>single</b> can be null)", "SrcLines": ["        last = 0;", "    else", "        last++;", "    sresp = bs->tbsResponseData.responses;", "    for (i = last; i < sk_OCSP_SINGLERESP_num(sresp); i++) {", "        single = sk_OCSP_SINGLERESP_value(sresp, i);", "        if (!OCSP_id_cmp(id, single->certId))", "            return i;", "    }", "    return -1;"], "SrcStart": 237}, {"FileMD5": "20599ca5fb727bf37a0f38ed944841c7.c", "FileName": "crypto/ocsp/ocsp_cl.c", "Line": 243, "Tip": "Load value from <b>single-&gt;certId</b>", "SrcLines": ["    else", "        last++;", "    sresp = bs->tbsResponseData.responses;", "    for (i = last; i < sk_OCSP_SINGLERESP_num(sresp); i++) {", "        single = sk_OCSP_SINGLERESP_value(sresp, i);", "        if (!OCSP_id_cmp(id, single->certId))", "            return i;", "    }", "    return -1;", "}"], "SrcStart": 238}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/ocsp/ocsp_cl.c", "Line": 243}, {"HashID": "3db78d39bf95aa3c70f2ce015b6fb20e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "84a79bd5e5c7303081c75378698da6ec.h", "FileName": "include/openssl/pkcs7.h", "Line": 58, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    X509_ALGOR *key_enc_algor;", "    ASN1_OCTET_STRING *enc_key;", "    X509 *cert;                 /* get the pub-key from this */", "} PKCS7_RECIP_INFO;", "", "DEFINE_STACK_OF(PKCS7_RECIP_INFO)", "", "typedef struct pkcs7_signed_st {", "    ASN1_INTEGER *version;      /* version 1 */", "    STACK_OF(X509_ALGOR) *md_algs; /* md used */"], "SrcStart": 53}, {"FileMD5": "13211e2377a2fa2ee9c40a8118bed3af.c", "FileName": "crypto/pkcs7/pk7_doit.c", "Line": 1067, "Tip": "Function <b>sk_PKCS7_RECIP_INFO_value</b> executes and stores the return value to <b>ri</b> (<b>ri</b> can be null)", "SrcLines": ["    rsk = p7->d.signed_and_enveloped->recipientinfo;", "    if (rsk == NULL)", "        return NULL;", "    if (sk_PKCS7_RECIP_INFO_num(rsk) <= idx)", "        return (NULL);", "    ri = sk_PKCS7_RECIP_INFO_value(rsk, idx);", "    return (ri->issuer_and_serial);", "}", "", "ASN1_TYPE *PKCS7_get_signed_attribute(PKCS7_SIGNER_INFO *si, int nid)"], "SrcStart": 1062}, {"FileMD5": "13211e2377a2fa2ee9c40a8118bed3af.c", "FileName": "crypto/pkcs7/pk7_doit.c", "Line": 1068, "Tip": "Load value from <b>ri-&gt;issuer_and_serial</b>", "SrcLines": ["    if (rsk == NULL)", "        return NULL;", "    if (sk_PKCS7_RECIP_INFO_num(rsk) <= idx)", "        return (NULL);", "    ri = sk_PKCS7_RECIP_INFO_value(rsk, idx);", "    return (ri->issuer_and_serial);", "}", "", "ASN1_TYPE *PKCS7_get_signed_attribute(PKCS7_SIGNER_INFO *si, int nid)", "{"], "SrcStart": 1063}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/pkcs7/pk7_doit.c", "Line": 1068}, {"HashID": "a528f4e219f32454a7a342bf282e703e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "84a79bd5e5c7303081c75378698da6ec.h", "FileName": "include/openssl/pkcs7.h", "Line": 48, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    STACK_OF(X509_ATTRIBUTE) *unauth_attr; /* [ 1 ] */", "    /* The private key to sign with */", "    EVP_PKEY *pkey;", "} PKCS7_SIGNER_INFO;", "", "DEFINE_STACK_OF(PKCS7_SIGNER_INFO)", "", "typedef struct pkcs7_recip_info_st {", "    ASN1_INTEGER *version;      /* version 0 */", "    PKCS7_ISSUER_AND_SERIAL *issuer_and_serial;"], "SrcStart": 43}, {"FileMD5": "91ed5640f12caa218af8a7a375a0ab10.c", "FileName": "crypto/pkcs7/pk7_smime.c", "Line": 184, "Tip": "Function <b>sk_PKCS7_SIGNER_INFO_value</b> executes and stores the return value to <b>sitmp</b> (<b>sitmp</b> can be null)", "SrcLines": ["    STACK_OF(PKCS7_SIGNER_INFO) *sinfos;", "    PKCS7_SIGNER_INFO *sitmp;", "    ASN1_OCTET_STRING *osdig = NULL;", "    sinfos = PKCS7_get_signer_info(p7);", "    for (i = 0; i < sk_PKCS7_SIGNER_INFO_num(sinfos); i++) {", "        sitmp = sk_PKCS7_SIGNER_INFO_value(sinfos, i);", "        if (si == sitmp)", "            break;", "        if (sk_X509_ATTRIBUTE_num(sitmp->auth_attr) <= 0)", "            continue;"], "SrcStart": 179}, {"FileMD5": "91ed5640f12caa218af8a7a375a0ab10.c", "FileName": "crypto/pkcs7/pk7_smime.c", "Line": 187, "Tip": "Load value from <b>sitmp-&gt;auth_attr</b>", "SrcLines": ["    sinfos = PKCS7_get_signer_info(p7);", "    for (i = 0; i < sk_PKCS7_SIGNER_INFO_num(sinfos); i++) {", "        sitmp = sk_PKCS7_SIGNER_INFO_value(sinfos, i);", "        if (si == sitmp)", "            break;", "        if (sk_X509_ATTRIBUTE_num(sitmp->auth_attr) <= 0)", "            continue;", "        if (!OBJ_cmp(si->digest_alg->algorithm, sitmp->digest_alg->algorithm)) {", "            osdig = PKCS7_digest_from_attributes(sitmp->auth_attr);", "            break;"], "SrcStart": 182}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/pkcs7/pk7_smime.c", "Line": 187}, {"HashID": "ada5b22e3f83340c220d0aed63bcd484", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "84a79bd5e5c7303081c75378698da6ec.h", "FileName": "include/openssl/pkcs7.h", "Line": 48, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    STACK_OF(X509_ATTRIBUTE) *unauth_attr; /* [ 1 ] */", "    /* The private key to sign with */", "    EVP_PKEY *pkey;", "} PKCS7_SIGNER_INFO;", "", "DEFINE_STACK_OF(PKCS7_SIGNER_INFO)", "", "typedef struct pkcs7_recip_info_st {", "    ASN1_INTEGER *version;      /* version 0 */", "    PKCS7_ISSUER_AND_SERIAL *issuer_and_serial;"], "SrcStart": 43}, {"FileMD5": "91ed5640f12caa218af8a7a375a0ab10.c", "FileName": "crypto/pkcs7/pk7_smime.c", "Line": 407, "Tip": "Function <b>sk_PKCS7_SIGNER_INFO_value</b> executes and stores the return value to <b>si</b> (<b>si</b> can be null)", "SrcLines": ["        PKCS7err(PKCS7_F_PKCS7_GET0_SIGNERS, ERR_R_MALLOC_FAILURE);", "        return NULL;", "    }", "", "    for (i = 0; i < sk_PKCS7_SIGNER_INFO_num(sinfos); i++) {", "        si = sk_PKCS7_SIGNER_INFO_value(sinfos, i);", "        ias = si->issuer_and_serial;", "        signer = NULL;", "        /* If any certificates passed they take priority */", "        if (certs)"], "SrcStart": 402}, {"FileMD5": "91ed5640f12caa218af8a7a375a0ab10.c", "FileName": "crypto/pkcs7/pk7_smime.c", "Line": 408, "Tip": "Load value from <b>si-&gt;issuer_and_serial</b> and assign to <b>ias</b>", "SrcLines": ["        return NULL;", "    }", "", "    for (i = 0; i < sk_PKCS7_SIGNER_INFO_num(sinfos); i++) {", "        si = sk_PKCS7_SIGNER_INFO_value(sinfos, i);", "        ias = si->issuer_and_serial;", "        signer = NULL;", "        /* If any certificates passed they take priority */", "        if (certs)", "            signer = X509_find_by_issuer_and_serial(certs,"], "SrcStart": 403}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/pkcs7/pk7_smime.c", "Line": 408}]}, "start": 41, "end": 50, "page": 6, "total_pages": 11, "language": "en"}