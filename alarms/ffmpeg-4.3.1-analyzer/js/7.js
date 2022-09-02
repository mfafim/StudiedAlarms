var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "98d82504954a1edf3abf6881eac38c5a", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 141, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    if (!s)", "        return NULL;", "    ffio_init_context(s, buffer, buffer_size, write_flag, opaque,", "                  read_packet, write_packet, seek);", "    return s;", "}", "", "void avio_context_free(AVIOContext **ps)", "{", "    av_freep(ps);"], "SrcStart": 136}, {"FileMD5": "b8ada2362a700d4502e1bb50f364fa44.c", "FileName": "libavformat/avidec.c", "Line": 1072, "Tip": "Store value to <b>pb</b>", "SrcLines": ["        int score      = AVPROBE_SCORE_EXTENSION, ret;", "        AVIStream *ast = st->priv_data;", "        ff_const59 AVInputFormat *sub_demuxer;", "        AVRational time_base;", "        int size;", "        AVIOContext *pb = avio_alloc_context(pkt->data + 7,", "                                             pkt->size - 7,", "                                             0, NULL, NULL, NULL, NULL);", "        AVProbeData pd;", "        unsigned int desc_len = avio_rl32(pb);"], "SrcStart": 1067}, {"FileMD5": "b8ada2362a700d4502e1bb50f364fa44.c", "FileName": "libavformat/avidec.c", "Line": 1094, "Tip": "Load value from <b>pb</b>", "SrcLines": ["        size = pb->buf_end - pb->buf_ptr;", "        pd = (AVProbeData) { .buf      = av_mallocz(size + AVPROBE_PADDING_SIZE),", "                             .buf_size = size };", "        if (!pd.buf)", "            goto error;", "        memcpy(pd.buf, pb->buf_ptr, size);", "        sub_demuxer = av_probe_input_format2(&pd, 1, &score);", "        av_freep(&pd.buf);", "        if (!sub_demuxer)", "            goto error;"], "SrcStart": 1089}, {"FileMD5": "b8ada2362a700d4502e1bb50f364fa44.c", "FileName": "libavformat/avidec.c", "Line": 1094, "Tip": "Load value from <b>pb-&gt;buf_ptr</b>", "SrcLines": ["        size = pb->buf_end - pb->buf_ptr;", "        pd = (AVProbeData) { .buf      = av_mallocz(size + AVPROBE_PADDING_SIZE),", "                             .buf_size = size };", "        if (!pd.buf)", "            goto error;", "        memcpy(pd.buf, pb->buf_ptr, size);", "        sub_demuxer = av_probe_input_format2(&pd, 1, &score);", "        av_freep(&pd.buf);", "        if (!sub_demuxer)", "            goto error;"], "SrcStart": 1089}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/avidec.c", "Line": 1094}, {"HashID": "8030a0d1d1643b9ea24c1b9f13c45b38", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "757f2bb73f364d7fbfabcc5794ead2d6.c", "FileName": "libavformat/riffenc.c", "Line": 363, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    for (i = 0; av_guid[i].id != AV_CODEC_ID_NONE; i++) {", "        if (id == av_guid[i].id)", "            return &(av_guid[i].guid);", "    }", "    return NULL;", "}"], "SrcStart": 358}, {"FileMD5": "757f2bb73f364d7fbfabcc5794ead2d6.c", "FileName": "libavformat/riffenc.c", "Line": 185, "Tip": "The return value of function <b>ff_get_codec_guid</b> is used as the 2nd parameter in function <b>ff_put_guid</b> (the return value of function <b>ff_get_codec_guid</b> can be null)", "SrcLines": ["        avio_wl16(pb, bps);", "        /* dwChannelMask */", "        avio_wl32(pb, write_channel_mask ? par->channel_layout : 0);", "        /* GUID + next 3 */", "        if (par->codec_id == AV_CODEC_ID_EAC3) {", "            ff_put_guid(pb, ff_get_codec_guid(par->codec_id, ff_codec_wav_guids));", "        } else {", "        avio_wl32(pb, par->codec_tag);", "        avio_wl32(pb, 0x00100000);", "        avio_wl32(pb, 0xAA000080);"], "SrcStart": 180}, {"FileMD5": "757f2bb73f364d7fbfabcc5794ead2d6.c", "FileName": "libavformat/riffenc.c", "Line": 352, "Tip": "<b>g</b> is used as the 2nd parameter in function <b>avio_write</b> (<b>g</b> can be null)", "SrcLines": ["}", "", "void ff_put_guid(AVIOContext *s, const ff_asf_guid *g)", "{", "    av_assert0(sizeof(*g) == 16);", "    avio_write(s, *g, sizeof(*g));", "}", "", "const ff_asf_guid *ff_get_codec_guid(enum AVCodecID id, const AVCodecGuid *av_guid)", "{"], "SrcStart": 347}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 215, "Tip": "Select the false branch at this point (<b>s-&gt;update_checksum==null</b> is false)", "SrcLines": ["    }", "}", "", "void avio_write(AVIOContext *s, const unsigned char *buf, int size)", "{", "    if (s->direct && !s->update_checksum) {", "        avio_flush(s);", "        writeout(s, buf, size);", "        return;", "    }"], "SrcStart": 210}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 222, "Tip": "Copy data from <b>buf</b> (<b>buf</b> can be null)", "SrcLines": ["        writeout(s, buf, size);", "        return;", "    }", "    while (size > 0) {", "        int len = FFMIN(s->buf_end - s->buf_ptr, size);", "        memcpy(s->buf_ptr, buf, len);", "        s->buf_ptr += len;", "", "        if (s->buf_ptr >= s->buf_end)", "            flush_buffer(s);"], "SrcStart": 217}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/aviobuf.c", "Line": 222}, {"HashID": "8b13b2ad7b9aa08d97fc41925b54b451", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 141, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    if (!s)", "        return NULL;", "    ffio_init_context(s, buffer, buffer_size, write_flag, opaque,", "                  read_packet, write_packet, seek);", "    return s;", "}", "", "void avio_context_free(AVIOContext **ps)", "{", "    av_freep(ps);"], "SrcStart": 136}, {"FileMD5": "b8ada2362a700d4502e1bb50f364fa44.c", "FileName": "libavformat/avidec.c", "Line": 1072, "Tip": "Store value to <b>pb</b>", "SrcLines": ["        int score      = AVPROBE_SCORE_EXTENSION, ret;", "        AVIStream *ast = st->priv_data;", "        ff_const59 AVInputFormat *sub_demuxer;", "        AVRational time_base;", "        int size;", "        AVIOContext *pb = avio_alloc_context(pkt->data + 7,", "                                             pkt->size - 7,", "                                             0, NULL, NULL, NULL, NULL);", "        AVProbeData pd;", "        unsigned int desc_len = avio_rl32(pb);"], "SrcStart": 1067}, {"FileMD5": "b8ada2362a700d4502e1bb50f364fa44.c", "FileName": "libavformat/avidec.c", "Line": 1087, "Tip": "<b>pb</b> is used as the 1st parameter in function <b>avio_rl32</b> (<b>pb</b> can be null)", "SrcLines": ["        avio_skip(pb, desc_len - ret);", "        if (*desc)", "            av_dict_set(&st->metadata, \"title\", desc, 0);", "", "        avio_rl16(pb);   /* flags? */", "        avio_rl32(pb);   /* data size */", "", "        size = pb->buf_end - pb->buf_ptr;", "        pd = (AVProbeData) { .buf      = av_mallocz(size + AVPROBE_PADDING_SIZE),", "                             .buf_size = size };"], "SrcStart": 1082}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 751, "Tip": "<b>s</b> is used as the 1st parameter in function <b>avio_rl16</b> (<b>s</b> can be null)", "SrcLines": ["", "unsigned int avio_rl32(AVIOContext *s)", "{", "    unsigned int val;", "    val = avio_rl16(s);", "    val |= avio_rl16(s) << 16;", "    return val;", "}", "", "uint64_t avio_rl64(AVIOContext *s)"], "SrcStart": 746}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 734, "Tip": "<b>s</b> is used as the 1st parameter in function <b>avio_r8</b> (<b>s</b> can be null)", "SrcLines": ["}", "", "unsigned int avio_rl16(AVIOContext *s)", "{", "    unsigned int val;", "    val = avio_r8(s);", "    val |= avio_r8(s) << 8;", "    return val;", "}", ""], "SrcStart": 729}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 618, "Tip": "Load value from <b>s-&gt;buf_ptr</b>", "SrcLines": ["}", "", "/* XXX: put an inline version */", "int avio_r8(AVIOContext *s)", "{", "    if (s->buf_ptr >= s->buf_end)", "        fill_buffer(s);", "    if (s->buf_ptr < s->buf_end)", "        return *s->buf_ptr++;", "    return 0;"], "SrcStart": 613}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/aviobuf.c", "Line": 618}, {"HashID": "88099194f53d12b3a71e2668817c4e79", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "92dd853b1702da8118307e3a70a50ee0.c", "FileName": "libavformat/id3v2.c", "Line": 821, "Tip": "Store <b>null</b> to <b>buffer</b>", "SrcLines": ["    int64_t next, end = avio_tell(pb) + len;", "    int taghdrlen;", "    const char *reason = NULL;", "    AVIOContext pb_local;", "    AVIOContext *pbx;", "    unsigned char *buffer = NULL;", "    int buffer_size       = 0;", "    const ID3v2EMFunc *extra_func = NULL;", "    unsigned char *uncompressed_buffer = NULL;", "    av_unused int uncompressed_buffer_size = 0;"], "SrcStart": 816}, {"FileMD5": "92dd853b1702da8118307e3a70a50ee0.c", "FileName": "libavformat/id3v2.c", "Line": 973, "Tip": "<b>buffer</b> is used as the 2nd parameter in function <b>avio_read</b> (<b>buffer</b> can be null)", "SrcLines": ["            if (unsync || tunsync) {", "                uint8_t *b = buffer;", "                uint8_t *t = buffer;", "                uint8_t *end = t + tlen;", "", "                if (avio_read(pb, buffer, tlen) != tlen) {", "                    av_log(s, AV_LOG_ERROR, \"Failed to read tag data\\n\");", "                    goto seek;", "                }", ""], "SrcStart": 968}, {"FileMD5": "f29e3e1cd9860377938b10bf145cabab.c", "FileName": "libavformat/aviobuf.c", "Line": 661, "Tip": "Copy data to <b>buf</b> (<b>buf</b> can be null)", "SrcLines": ["                len = s->buf_end - s->buf_ptr;", "                if (len == 0)", "                    break;", "            }", "        } else {", "            memcpy(buf, s->buf_ptr, len);", "            buf += len;", "            s->buf_ptr += len;", "            size -= len;", "        }"], "SrcStart": 656}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/aviobuf.c", "Line": 661}, {"HashID": "38dd9ade222b81afefb179b99d0b995f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c8c38e4ac6ddec13bad233f4fba19038.c", "FileName": "libavformat/dump.c", "Line": 604, "Tip": "Select the false branch at this point (<b>ic-&gt;nb_streams!=0</b> is false)", "SrcLines": ["", "void av_dump_format(AVFormatContext *ic, int index,", "                    const char *url, int is_output)", "{", "    int i;", "    uint8_t *printed = ic->nb_streams ? av_mallocz(ic->nb_streams) : NULL;", "    if (ic->nb_streams && !printed)", "        return;", "", "    av_log(NULL, AV_LOG_INFO, \"%s #%d, %s, %s '%s':\\n\","], "SrcStart": 599}, {"FileMD5": "c8c38e4ac6ddec13bad233f4fba19038.c", "FileName": "libavformat/dump.c", "Line": 604, "Tip": "<b>null</b> assigned to <b>printed</b> reaches here", "SrcLines": ["", "void av_dump_format(AVFormatContext *ic, int index,", "                    const char *url, int is_output)", "{", "    int i;", "    uint8_t *printed = ic->nb_streams ? av_mallocz(ic->nb_streams) : NULL;", "    if (ic->nb_streams && !printed)", "        return;", "", "    av_log(NULL, AV_LOG_INFO, \"%s #%d, %s, %s '%s':\\n\","], "SrcStart": 599}, {"FileMD5": "c8c38e4ac6ddec13bad233f4fba19038.c", "FileName": "libavformat/dump.c", "Line": 671, "Tip": "Store <b>1</b> to <b>printed[ic-&gt;programs[i]-&gt;stream_index[i]]</b>", "SrcLines": ["                   name ? name->value : \"\");", "            dump_metadata(NULL, ic->programs[j]->metadata, \"    \");", "            for (k = 0; k < ic->programs[j]->nb_stream_indexes; k++) {", "                dump_stream_format(ic, ic->programs[j]->stream_index[k],", "                                   index, is_output);", "                printed[ic->programs[j]->stream_index[k]] = 1;", "            }", "            total += ic->programs[j]->nb_stream_indexes;", "        }", "        if (total < ic->nb_streams)"], "SrcStart": 666}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/dump.c", "Line": 671}, {"HashID": "fa9fba938729b3dc8480a2a65571c864", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 404, "Tip": "Store <b>null</b> to <b>filepositions</b>", "SrcLines": ["{", "    FLVContext *flv       = s->priv_data;", "    unsigned int timeslen = 0, fileposlen = 0, i;", "    char str_val[256];", "    int64_t *times         = NULL;", "    int64_t *filepositions = NULL;", "    int ret                = AVERROR(ENOSYS);", "    int64_t initial_pos    = avio_tell(ioc);", "", "    if (flv->keyframe_count > 0) {"], "SrcStart": 399}, {"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 463, "Tip": "Load value from <b>filepositions</b>", "SrcLines": ["        }", "    }", "", "    if (timeslen == fileposlen && fileposlen>1 && max_pos <= filepositions[0]) {", "        for (i = 0; i < FFMIN(2,fileposlen); i++) {", "            flv->validate_index[i].pos = filepositions[i];", "            flv->validate_index[i].dts = times[i] * 1000;", "            flv->validate_count        = i + 1;", "        }", "        flv->keyframe_times = times;"], "SrcStart": 458}, {"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 463, "Tip": "Load value from <b>filepositions[i]</b>", "SrcLines": ["        }", "    }", "", "    if (timeslen == fileposlen && fileposlen>1 && max_pos <= filepositions[0]) {", "        for (i = 0; i < FFMIN(2,fileposlen); i++) {", "            flv->validate_index[i].pos = filepositions[i];", "            flv->validate_index[i].dts = times[i] * 1000;", "            flv->validate_count        = i + 1;", "        }", "        flv->keyframe_times = times;"], "SrcStart": 458}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/flvdec.c", "Line": 463}, {"HashID": "8a0c9b62c29e73cf4d44c200abc02660", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 403, "Tip": "Store <b>null</b> to <b>times</b>", "SrcLines": ["static int parse_keyframes_index(AVFormatContext *s, AVIOContext *ioc, int64_t max_pos)", "{", "    FLVContext *flv       = s->priv_data;", "    unsigned int timeslen = 0, fileposlen = 0, i;", "    char str_val[256];", "    int64_t *times         = NULL;", "    int64_t *filepositions = NULL;", "    int ret                = AVERROR(ENOSYS);", "    int64_t initial_pos    = avio_tell(ioc);", ""], "SrcStart": 398}, {"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 464, "Tip": "Load value from <b>times</b>", "SrcLines": ["    }", "", "    if (timeslen == fileposlen && fileposlen>1 && max_pos <= filepositions[0]) {", "        for (i = 0; i < FFMIN(2,fileposlen); i++) {", "            flv->validate_index[i].pos = filepositions[i];", "            flv->validate_index[i].dts = times[i] * 1000;", "            flv->validate_count        = i + 1;", "        }", "        flv->keyframe_times = times;", "        flv->keyframe_filepositions = filepositions;"], "SrcStart": 459}, {"FileMD5": "ee8acf9d99dc6761d7da5af81e5a737f.c", "FileName": "libavformat/flvdec.c", "Line": 464, "Tip": "Load value from <b>times[i]</b>", "SrcLines": ["    }", "", "    if (timeslen == fileposlen && fileposlen>1 && max_pos <= filepositions[0]) {", "        for (i = 0; i < FFMIN(2,fileposlen); i++) {", "            flv->validate_index[i].pos = filepositions[i];", "            flv->validate_index[i].dts = times[i] * 1000;", "            flv->validate_count        = i + 1;", "        }", "        flv->keyframe_times = times;", "        flv->keyframe_filepositions = filepositions;"], "SrcStart": 459}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/flvdec.c", "Line": 464}, {"HashID": "a9fbbe1ab24b7759dbd06caf39f8c415", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "9ec39e3846d8f08ad5cada0480bded7e.c", "FileName": "libavformat/mov.c", "Line": 1176, "Tip": "Return <b>null</b> to caller", "SrcLines": ["        if (item->stream_info[i].id == id)", "            return &item->stream_info[i];", "", "    // This shouldn't happen", "    return NULL;", "}", "", "static void set_frag_stream(MOVFragmentIndex *frag_index, int id)", "{", "    int i;"], "SrcStart": 1171}, {"FileMD5": "9ec39e3846d8f08ad5cada0480bded7e.c", "FileName": "libavformat/mov.c", "Line": 1256, "Tip": "Function <b>get_frag_stream_info</b> executes and stores the return value to <b>frag_stream_info</b> (<b>frag_stream_info</b> can be null)", "SrcLines": ["    MOVFragmentStreamInfo * frag_stream_info;", "    int64_t timestamp;", "    int i;", "", "    if (track_id >= 0) {", "        frag_stream_info = get_frag_stream_info(frag_index, index, track_id);", "        return frag_stream_info->sidx_pts;", "    }", "", "    for (i = 0; i < frag_index->item[index].nb_stream_info; i++) {"], "SrcStart": 1251}, {"FileMD5": "9ec39e3846d8f08ad5cada0480bded7e.c", "FileName": "libavformat/mov.c", "Line": 1257, "Tip": "Load value from <b>frag_stream_info-&gt;sidx_pts</b>", "SrcLines": ["    int64_t timestamp;", "    int i;", "", "    if (track_id >= 0) {", "        frag_stream_info = get_frag_stream_info(frag_index, index, track_id);", "        return frag_stream_info->sidx_pts;", "    }", "", "    for (i = 0; i < frag_index->item[index].nb_stream_info; i++) {", "        frag_stream_info = &frag_index->item[index].stream_info[i];"], "SrcStart": 1252}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/mov.c", "Line": 1257}, {"HashID": "27f2de195c1946f5bf02b336b44867e9", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c0422797fae1b2f104fb9b074ba94bbd.c", "FileName": "libavformat/movenc.c", "Line": 4093, "Tip": "Select the false branch at this point (<b>i&lt;s-&gt;nb_streams</b> is false)", "SrcLines": ["    mov_write_mvhd_tag(pb, mov);", "    if (mov->mode != MODE_MOV && !mov->iods_skip)", "        mov_write_iods_tag(pb, mov);", "    for (i = 0; i < mov->nb_streams; i++) {", "        if (mov->tracks[i].entry > 0 || mov->flags & FF_MOV_FLAG_FRAGMENT) {", "            int ret = mov_write_trak_tag(s, pb, mov, &(mov->tracks[i]), i < s->nb_streams ? s->streams[i] : NULL);", "            if (ret < 0)", "                return ret;", "        }", "    }"], "SrcStart": 4088}, {"FileMD5": "c0422797fae1b2f104fb9b074ba94bbd.c", "FileName": "libavformat/movenc.c", "Line": 4093, "Tip": "<b>null</b> is used as the 5th parameter in function <b>mov_write_trak_tag</b>", "SrcLines": ["    mov_write_mvhd_tag(pb, mov);", "    if (mov->mode != MODE_MOV && !mov->iods_skip)", "        mov_write_iods_tag(pb, mov);", "    for (i = 0; i < mov->nb_streams; i++) {", "        if (mov->tracks[i].entry > 0 || mov->flags & FF_MOV_FLAG_FRAGMENT) {", "            int ret = mov_write_trak_tag(s, pb, mov, &(mov->tracks[i]), i < s->nb_streams ? s->streams[i] : NULL);", "            if (ret < 0)", "                return ret;", "        }", "    }"], "SrcStart": 4088}, {"FileMD5": "c0422797fae1b2f104fb9b074ba94bbd.c", "FileName": "libavformat/movenc.c", "Line": 3276, "Tip": "Load value from <b>st-&gt;sample_aspect_ratio.id</b>", "SrcLines": ["    if (track->tag == MKTAG('r','t','p',' '))", "        mov_write_udta_sdp(pb, track);", "    if (track->mode == MODE_MOV) {", "        if (track->par->codec_type == AVMEDIA_TYPE_VIDEO) {", "            double sample_aspect_ratio = av_q2d(st->sample_aspect_ratio);", "            if (st->sample_aspect_ratio.num && 1.0 != sample_aspect_ratio) {", "                mov_write_tapt_tag(pb, track);", "            }", "        }", "        if (is_clcp_track(track) && st->sample_aspect_ratio.num) {"], "SrcStart": 3271}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/movenc.c", "Line": 3276}, {"HashID": "26e32ed36c921f0f2668084826a5d378", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "5b2e156f1814ba74e1beece99e15df89.c", "FileName": "libavformat/rdt.c", "Line": 338, "Tip": "Select the false branch at this point (<b>bufptr!=null</b> is false)", "SrcLines": ["", "int", "ff_rdt_parse_packet(RDTDemuxContext *s, AVPacket *pkt,", "                    uint8_t **bufptr, int len)", "{", "    uint8_t *buf = bufptr ? *bufptr : NULL;", "    int seq_no, flags = 0, stream_id, set_id, is_keyframe;", "    uint32_t timestamp;", "    int rv= 0;", ""], "SrcStart": 333}, {"FileMD5": "5b2e156f1814ba74e1beece99e15df89.c", "FileName": "libavformat/rdt.c", "Line": 338, "Tip": "<b>null</b> assigned to <b>buf</b> reaches here", "SrcLines": ["", "int", "ff_rdt_parse_packet(RDTDemuxContext *s, AVPacket *pkt,", "                    uint8_t **bufptr, int len)", "{", "    uint8_t *buf = bufptr ? *bufptr : NULL;", "    int seq_no, flags = 0, stream_id, set_id, is_keyframe;", "    uint32_t timestamp;", "    int rv= 0;", ""], "SrcStart": 333}, {"FileMD5": "5b2e156f1814ba74e1beece99e15df89.c", "FileName": "libavformat/rdt.c", "Line": 357, "Tip": "<b>null</b> is used as the 1st parameter in function <b>ff_rdt_parse_header</b>", "SrcLines": ["        return rv;", "    }", "", "    if (len < 12)", "        return -1;", "    rv = ff_rdt_parse_header(buf, len, &set_id, &seq_no, &stream_id, &is_keyframe, &timestamp);", "    if (rv < 0)", "        return rv;", "    if (is_keyframe &&", "        (set_id != s->prev_set_id || timestamp != s->prev_timestamp ||"], "SrcStart": 352}, {"FileMD5": "5b2e156f1814ba74e1beece99e15df89.c", "FileName": "libavformat/rdt.c", "Line": 200, "Tip": "Load value from <b>buf[1]</b>", "SrcLines": ["    int consumed = 0, set_id, seq_no, stream_id, is_keyframe,", "        len_included, need_reliable;", "    uint32_t timestamp;", "", "    /* skip status packets */", "    while (len >= 5 && buf[1] == 0xFF /* status packet */) {", "        int pkt_len;", "", "        if (!(buf[0] & 0x80))", "            return -1; /* not followed by a data packet */"], "SrcStart": 195}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavformat/rdt.c", "Line": 200}]}, "start": 51, "end": 60, "page": 7, "total_pages": 9, "language": "en"}