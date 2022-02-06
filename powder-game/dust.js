/*
 Copyright (C) 2007 ha55ii, http://dan-ball.jp/
 The games source code use is prohibition.
 LOLOL CRACKED By Kippykip!
*/
var ba = 0,
    g = 416,
    ca = 464,
    da = 0,
    ea = 40,
    ga = !1,
    ha = 2,
    ia = 0,
    ja = [2E4, 3E4, 4E4],
    ma = 0,
    na = 2,
    pa = 0,
    qa = 0,
    ra = 0,
    sa = 0,
    ta = 8,
    ua = 8,
    va = 8,
    wa = 8,
    xa = [],
    ya = [],
    za = -1,
    Aa = 0,
    Ba = 0,
    Ca = 0,
    Ga = 0,
    Ha = 0,
    Ia = 0,
    Ja = 0,
    Ka = 0,
    Na = 0,
    Oa = 0,
    Ta = new Pa,
    Ua = "",
    Xa = "",
    Ya = 0,
    Za = 0,
    $a = 0,
    ab = ["sans-serif", "serif", "monospace", "setFont ->"],
    bb = ["PLAIN", "BOLD", "ITALIC", "BOLD&ITALIC"],
    cb = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72],
    db = Array(309 * g),
    fb = Array(309 * g),
    gb = Array(309 * g),
    jb = new Pa,
    kb = new Pa,
    lb, mb, nb = [],
    ob = [],
    pb = "",
    rb = !1,
    sb = "",
    tb, ub, vb, wb = 0,
    xb = 0,
    yb = 0,
    zb = 0,
    Bb = 0;
window.GameSave = Cb;

function Cb(a) {
    if (0 == a.length || 0 != sb.length) return "";
    Db();
    Eb();
    var b = 0;
    for (a = 0; a < tb.length; a++) b += tb.charCodeAt(a) * ((a & 255) + 1);
    a = tb;
    a += Fb(97 + (b & 15));
    a += Fb(65 + ((b & 240) >> 4));
    return a += Fb(48 + ((b & 1792) >> 8))
}
var Gb = "";
window.GameLoad = Hb;

function Hb(a) {
    if (3 < a.length) {
        for (var b = 0, c = 0; c < a.length - 3; c++) b += a.charCodeAt(c) * ((c & 255) + 1);
        if ((b & 15) != a.charCodeAt(a.length - 3) - 97 || (b & 240) >> 4 != a.charCodeAt(a.length - 2) - 65 || (b & 1792) >> 8 != a.charCodeAt(a.length - 1) - 48) return -1;
        Gb = a.substring(0, a.length - 3);
        return 0
    }
    0 == a.length && 0 != Gb.length && (tb = Gb, Gb = "", Ib(), Jb());
    return -1
}
var Kb = 0;

function Lb(a, b, c) {
    if (0 == Kb) {
        a && (pb = a);
        "0" == b && (rb = !0);
        c && (sb = c);
        Mb(Nb);
		Mb("Cracked by Kippykip");
        Ob.width = 400;
        Ob.height = 456;
        for (a = 0; 513 > a; a++) Pb[a] = Array(2);
        for (a = 0; 512 > a; a++) b = 360 * a / 512 * Qb / 180, Pb[a][0] = Math.cos(b), Pb[a][1] = Math.sin(b);
        Pb[a][0] = Pb[0][0];
        Pb[a][1] = Pb[0][1];
        for (a = 0; 256 > a; a++) Rb[a] = !1, Sb[a] = !1, Tb[a] = !1, Ub[a] = 0, Vb[a] = 0;
        for (a = 0; 10 > a; a++) Ub[48 + a] = 48 + a;
        for (a = 0; 9 > a; a++) Vb[49 + a] = 33 + a;
        for (a = 0; 4 > a; a++) Ub[37 + a] = 37 + a;
        for (a = 0; 4 > a; a++) Vb[37 + a] = 37 + a;
        Ub[13] = Vb[13] = 13;
        Ub[16] = Vb[16] = 16;
        Ub[17] = Vb[17] = 17;
        Ub[18] = Vb[18] = 18;
        Ub[32] =
            Vb[32] = 32;
        Ub[186] = 58;
        Vb[186] = 42;
        Ub[187] = 59;
        Vb[187] = 43;
        Ub[188] = 44;
        Vb[188] = 60;
        Ub[189] = 45;
        Vb[189] = 61;
        Ub[190] = 46;
        Vb[190] = 62;
        Ub[191] = 47;
        Vb[191] = 63;
        Ub[192] = 64;
        Vb[192] = 96;
        Ub[219] = 91;
        Vb[219] = 123;
        Ub[220] = 92;
        Vb[220] = 124;
        Ub[221] = 93;
        Vb[221] = 125;
        Ub[222] = 94;
        Vb[222] = 126;
        Ub[226] = 92;
        Vb[226] = 95;
        Ub[58] = 58;
        Vb[58] = 42;
        Ub[59] = 59;
        Vb[59] = 43;
        Ub[173] = 45;
        Vb[173] = 61;
        Ub[64] = 64;
        Vb[64] = 96;
        Ub[160] = 94;
        Vb[160] = 126;
        for (a = 0; 1024 > a; a++) Wb[a] = a / 1024;
        for (a = 0; 1024 > a; a++) b = k(1024 * Math.random()), c = Wb[a], Wb[a] = Wb[b], Wb[b] = c;
        Xb = k(1024 * Math.random()) &
            1023;
        Zb = k(512 * Math.random()) | 1;
        for (a = 0; a < g * ca; a++) l[a] = 4278190080;
        for (a = 0; a < g * ca * 4; a++) $b[a] = 255;
        m.e("dust/font.gif", 8, 12);
        ac.e("dust/wheel.gif");
        dc() ? Kb-- : Kb++
    }
    1 == Kb && (ec(m.o), ec(ac), 0 != fc ? gc(Lb, hc()) : Kb++);
    if (2 == Kb) {
        0 == pb.length && (wb = 2, yb = 1);
        0 != sb.length && (wb = 2, yb = 3);
        ic.e(0);
        xa = Array(12E4);
        ya = Array(12E4);
        nb = Array(12E4);
        ob = Array(12E4);
        Db();
        0 < sb.length && (tb = jc(sb, ""), 1 == kc ? (Ib(), Jb(), Ba = xb = 1) : xb = 2);
        Db();
        Eb();
        for (a = 0; a < lc.length; a++) b = k((2989 * (lc[a][0] >> 16 & 255) + 5866 * (lc[a][0] >> 8 & 255) + 1145 * (lc[a][0] & 255)) / 1E4),
            mc[a] = 4278190080 | b << 16 | b << 8 | b;
        nc(0, 0, g, ca, 4282400832);
        p(211, 451, Nb, 0, 4278190080, -1);
        m.a(16, 311, "POWDER", 4294098283, 4278190080);
        m.a(16, 325, "WATER", 4282401023, 4278190080);
        m.a(16, 339, "FIRE", 4294918208, 4278190080);
        m.a(16, 353, "SEED", 4287676480, 4278190080);
        p(16, 367, "G-POWDER", 0, 4278190080, -2);
        p(16, 367, "G-POWDER", 4289757264, 0, -2);
        m.a(16, 381, "FAN", 4286611711, 4278190080);
        m.a(16, 395, "ICE", 4291875071, 4278190080);
        m.a(16, 409, "S-BALL", 4294918304, 4278190080);
        m.a(16, 423, "CLONE", 4287655952, 4278190080);
        p(16, 437, "F-WORKS",
            4294941030, 4278190080, -1);
        m.a(72, 311, "OIL", 4286591008, 4278190080);
        m.a(72, 325, "C-4", 4294967244, 4278190080);
        m.a(72, 339, "STONE", 4286611584, 4278190080);
        m.a(72, 353, "MAGMA", 4294927923, 4278190080);
        m.a(72, 367, "VIRUS", 4286578816, 4278190080);
        m.a(72, 381, "NITRO", 4282676992, 4278190080);
        m.a(72, 395, "ANT", 4290805952, 4278190080);
        m.a(72, 409, "TORCH", 4294942752, 4278190080);
        m.a(72, 423, "GAS", 4291598745, 4278190080);
        m.a(72, 437, "SOAPY", 4292927712, 4278190080);
        p(128, 311, "THUNDER", 4294967072, 4278190080, -1);
        m.a(128, 325, "METAL",
            4282400832, 4278190080);
        m.a(128, 339, "BOMB", 4284900864, 4278190080);
        m.a(128, 353, "LASER", 4291559424, 4278190080);
        m.a(128, 367, "ACID", 4291624704, 4278190080);
        m.a(128, 381, "VINE", 4278237952, 4278190080);
        m.a(128, 395, "SALT", 4294967295, 4278190080);
        m.a(128, 409, "GLASS", 4282400832, 4278190080);
        m.a(128, 423, "BIRD", 4286607440, 4278190080);
        p(128, 437, "MERCURY", 4289374890, 4278190080, -1);
        m.a(184, 311, "SPARK", 4294954035, 4278190080);
        m.a(184, 325, "FUSE", 4282659618, 4278190080);
        m.a(184, 339, "CLOUD", 4291611852, 4278190080);
        m.a(184,
            353, "PUMP", 4278203187, 4278190080);
        m.a(240, 311, "WIND", 4286611711, 4278190080);
        m.a(240, 325, "AIR", 4286611711, 4278190080);
        m.a(240, 339, "DRAG", 4294967295, 4278190080);
        m.a(240, 353, "B", 4294959328, 4278190080);
        m.a(240, 353, " U", 4294967264, 4278190080);
        m.a(240, 353, "  B", 4292935648, 4278190080);
        m.a(240, 353, "   B", 4292935679, 4278190080);
        m.a(240, 353, "    L", 4292927743, 4278190080);
        m.a(240, 353, "     E", 4294959359, 4278190080);
        m.a(240, 367, "WHEEL", 4289765520, 4278190080);
        m.a(240, 381, "PLAYER", 4294098283, 4278190080);
        p(240,
            395, "FIGHTER", 4294098283, 4278190080, -1);
        m.a(240, 409, "BOX", 4294098283, 4278190080);
        m.a(240, 423, "BALL", 4294098283, 4278190080);
        m.a(240, 437, "CREATE", 4287655952, 4278190080);
        m.a(296, 311, "BLOCK", 4286611584, 4278190080);
        m.a(296, 325, "ERASE", 4286611584, 4278190080);
        m.a(296, 339, "CLEAR", 4294967295, 4278190080);
        p(295, 353, "Copy", 0, 4278190080, -2);
        p(295, 353, "Copy", 4294967295, 0, -2);
        p(319, 353, "Paste", 0, 4278190080, -3);
        p(319, 353, "Paste", 4294967295, 0, -3);
        m.a(296, 367, "TEXT", 4294967295, 4278190080);
        p(296, 381, "PEN", 0, 4278190080, -1);
        p(296, 381, "PEN", 4294967295, 0, -1);
        p(296, 395, "PEN-S ", 4294967295, 4278190080, -1);
        p(296, 409, "SCALE", 4294967295, 4278190080, -1);
        p(296, 423, "SPEEDx", 4294967295, 4278190080, -1);
        p(295, 437, "Start", 0, 4278190080, -3);
        p(295, 437, "Start", 4294967295, 0, -3);
        p(321, 437, "Stop", 0, 4278190080, -2);
        p(321, 437, "Stop", 4294967295, 0, -2);
        m.a(352, 311, "UPLOAD", 4294942880, 4278190080);
        m.a(352, 325, "SAVE", 4294942880, 4278190080);
        m.a(352, 339, "LOAD", 4294942880, 4278190080);
        p(352, 353, "MiniMap", 4294942880, 4278190080, -1);
        p(352, 367, "MENU-",
            0, 4278190080, -2);
        p(352, 367, "MENU-", 4294967295, 0, -2);
        p(352, 381, "SIDE-", 0, 4278190080, -3);
        p(352, 381, "SIDE-", 4294967295, 0, -3);
        m.a(352, 395, "GRID", 4286578688, 4278190080);
        p(352, 409, "BG-", 0, 4278190080, -2);
        p(352, 409, "BG-", 4294967295, 0, -2);
        m.a(352, 423, "DOT ", 4294967295, 4278190080);
        m.a(352, 437, "RESET", 4294967295, 4278190080);
        p(64, 451, "x    y", 0, 4278190080, -1);
        p(141, 451, "dot", 0, 4278190080, -1);
        oc(jb, g, ca);
        for (a = 0; a < g * ca; a++) jb.b[a] = l[a];
        for (a = g * ca - 1; 0 <= a; a--) l[a] = 4278190080;
        qc()
    }
}
var s, rc, u, sc = 8216,
    v = Array(sc),
    tc = Array(sc),
    y = new Float32Array(sc),
    uc = new Float32Array(sc);
for (u = 0; u < sc; u++) v[u] = new Bc;
for (u = 0; u < sc; u++) tc[u] = new Bc;
var Cc, Dc = new Int32Array(sc),
    Ec = new Int32Array(sc),
    C = new Int32Array(sc),
    Fc, Gc, Hc, Ic, Jc = new Bc,
    Kc = 2,
    Lc = 3,
    D = 4,
    Mc = 5,
    Nc = 7,
    Oc = 8,
    Pc = 10,
    Qc = 12,
    Rc = 13,
    Sc = 14,
    Tc = 15,
    Uc = 16,
    Vc = 17,
    Wc = 19,
    Xc = 20,
    $c = 21,
    dd = 23,
    ed = 24,
    fd = 25,
    gd = 26,
    hd = 27,
    id = 28,
    jd = 29,
    kd = 31,
    od = 33,
    pd = 34,
    qd = 35,
    rd = 36,
    sd = 38,
    vd = 39,
    yd = 41,
    zd = 42,
    Ad = 43,
    Bd = 44,
    Cd = 45,
    Dd = [2, 3, 4, 5, 7, 8, 10, 13, 14, 15, 16, 17, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Hd = [2, 3, 4, 5, 7, 0, 11, 13, 0, 0, 16, 0,
        19, 20, 21, 23, 24, 4, 26, 12, 0, 0, 31, 33, 34, 0, 36, 0, 39, 41, 42, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    Id = [2, 3, 4, 5, 7, 8, 11, 13, 0, 15, 16, 0, 19, 20, 21, 23, 24, 0, 26, 27, 0, 0, 31, 33, 34, 0, 36, 0, 39, 41, 42, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Jd = [2, 3, 4, 5, 7, 8, 10, 0, 14, 0, 16, 17, 19, 20, 21, 23, 0, 25, 26, 27, 28, 29, 31, 0, 34, 0, 36, 38, 39, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    lc = [
        [0],
        [4284506208],
        [4294098283],
        [4282401023],
        [4294918208],
        [4287676480],
        [4286599200],
        [4289757264],
        [4286611711],
        [4289765520],
        [4291875071],
        [4294967295],
        [4292927712],
        [4294918304],
        [4287655952],
        [4294941030],
        [4286591008],
        [4294967244],
        [4294959278],
        [4286611584],
        [4294927923],
        [4286578816],
        [4294959278],
        [4282676992],
        [4290805952],
        [4294942752],
        [4291598745],
        [4292927712],
        [4294967072],
        [4282400832],
        [4294959278],
        [4284900864],
        [4294959278],
        [4291559424],
        [4291624704],
        [4278237952],
        [4294967295],
        [4281571839],
        [4278255873],
        [4286607440],
        [4294959278],
        [4289374890],
        [4294954035],
        [4282659618],
        [4291611852],
        [4278203187, 0, 4294098283, 4282401023, 4294918208, 4287676480, 4286599200, 4289757264, 4286611711, 0, 4291875071, 4294967295, 4292927712, 4294918304, 4287655952, 4294941030, 4286591008, 4294967244, 0, 4286611584, 4294927923, 4286578816, 0, 4282676992, 4290805952, 4294942752, 4291598745, 4292927712, 4294967072, 4282400832, 0, 4284900864, 0, 4291559424, 4291624704, 4278237952, 4294967295, 4281571839, 4278255873, 4286607440, 0, 4289374890, 4294954035, 4282659618, 4291611852, 0]
    ],
    mc = Array(lc.length),
    Kd = [0, 0, 0, 0, 5E3, 500,
        500, 0, 0, 0, -1E3, -500, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 0, 0, 0, 1500, 4E3, 500, 0, 2E3, 0, 0, 0, 0, 5500, 0, 500, 0, 0, 0, 2E3, 0, 0, 3E3, 0, 0, 0
    ],
    Ld = -5,
    E = -4,
    ic = new Md;

function Md() {}

function Db() {
    var a, b, c, d;
    for (a = 0; 12E4 > a; a++) nb[a] = 0, ob[a] = 0;
    for (c = 0; 300 > c; c++)
        for (b = 0; 400 > b; b++) d = ((c >> 2) + 2) * s + ((b >> 2) + 2), 1 == C[d] && (nb[400 * c + b] = 1);
    for (a = 0; a < Nd; a++) b = k(F[a].x), c = k(F[a].y), 8 > b || 408 <= b || 8 > c || 308 <= c || (b -= 8, c -= 8, d = 400 * c + b, nb[d] = H[a], H[a] == Oc ? ob[d] = Od(k(64 * Pd(I[a]) / Qd), 63) : H[a] == Tc && (ob[d] = J[a] % 100));
    for (a = 0; a < Sd; a++) d = 400 * (Td[a] - 8) + (Ud[a] - 8), nb[d] = 9, ob[d] = 0;
    for (a = 0; a < Vd; a++) d = a * Wd, K[a] == Xd || K[a] == Xd + 1 ? (b = k(L[d + 4].x), c = k(L[d + 4].y), 8 > b || g - 8 <= b || 8 > c || 308 <= c || (b = b >> 2 << 2, c = c >> 2 << 2, d = 400 *
        (c - 8) + (b - 8), nb[d] = 18, ob[d] = 0)) : K[a] == Yd ? (b = k(L[d].x), c = k(L[d].y), 8 > b || g - 8 <= b || 8 > c || 308 <= c || (b = b >> 2 << 2, c = c >> 2 << 2, d = 400 * (c - 8) + (b - 8), nb[d] = 22, ob[d] = Zd[a])) : K[a] == $d ? (b = k(L[d + 4].x), c = k(L[d + 4].y), 8 > b || g - 8 <= b || 8 > c || 308 <= c || (b = b >> 2 << 2, c = c >> 2 << 2, d = 400 * (c - 8) + (b - 8), nb[d] = 30, ob[d] = Zd[a])) : K[a] == ae && (b = k(L[d].x), c = k(L[d].y), 8 > b || g - 8 <= b || 8 > c || 308 <= c || (b = b >> 2 << 2, c = c >> 2 << 2, d = 400 * (c - 8) + (b - 8), nb[d] = 22, ob[d] = 10));
    for (a = 0; a < ce; a++) 0 != de[a] && (b = k(M[a].x), c = k(M[a].y), 8 > b || g - 8 <= b || 8 > c || 308 <= c || (d = 400 * (c - 8) + (b - 8), 0 == nb[d] &&
        (nb[d] = 40, ob[d] = N[a])));
    Bb = zb
}

function Eb() {
    var a, b, c, d;
    b = Array(12E4);
    c = 0;
    var e;
    for (a = 0; 12E4 > a; a++)
        if (d = nb[a], e = 1, d == Oc || d == Tc || 22 == d || 40 == d) b[c++] = d, b[c++] = ob[a];
        else if (30 == d) b[c++] = 32, b[c++] = ob[a];
    else {
        for (; 119999 > a && d == nb[a + 1]; a++)
            if (e++, 255 == e) {
                a++;
                break
            }
        b[c++] = d;
        1 != e && (16 > e ? b[c++] = 48 + e : (b[c++] = 48 + (e & 15), b[c++] = 48 + (e >> 4)))
    }
    e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*".split("");
    var f = Array(2 * c),
        h = 0;
    f[h++] = "1";
    f[h++] = "0";
    f[h++] = "0123456789:;ABCDEF".split("")[na + 1];
    f[h++] = "" + ia;
    f[h++] = "" + Aa;
    f[h++] = "" +
        Ca;
    f[h++] = "" + Ga;
    f[h++] = "0";
    f[h++] = e[Bb & 63];
    f[h++] = e[Bb >> 6];
    f[h++] = "0";
    f[h++] = "0";
    f[h++] = "0";
    f[h++] = "0";
    f[h++] = "0";
    f[h++] = "0";
    var r = Array(4096);
    for (a = 0; 4096 > a; a++) r[a] = [];
    var q = 1;
    for (a = 0; a < c;) {
        for (var w = 0, z = 1, A = 1; A < q; A++)
            if (r[A].length == z) {
                for (d = 0; d < z && r[A][d] == b[a + d]; d++);
                if (d == z && (w = A, z++, a + z >= c)) break
            }
        f[h++] = e[w >> 6];
        f[h++] = e[w & 63];
        f[h++] = e[b[a + z - 1]];
        if (4096 > q) {
            r[q] = Array(z);
            for (d = 0; d < z; d++) r[q][d] = b[a + d];
            q++
        }
        a += z
    }
    f[h - 1] || (f[h - 1] = e[0]);
    tb = "";
    for (a = 0; a < h; a++) tb += f[a];
    f = Array(7500);
    for (c = a = 0; 300 > c; c +=
        4)
        for (b = 0; 400 > b; b += 4) d = 400 * c + b, 0 == nb[d] && (d += 401), 11 == na ? nb[d] == D || nb[d] == Xc || nb[d] == fd || nb[d] == id || nb[d] == od || nb[d] == zd ? f[a++] = e[nb[d]] : f[a++] = "0" : 13 == na ? f[a++] = 0 == nb[d] ? "0" : "1" : f[a++] = e[nb[d]];
    ub = "";
    for (a = 0; 7500 > a; a++) ub += f[a];
    d = "0123456789abcdef".split("");
    if (9 == na) e = mc;
    else if (13 == na) e = [4294967295, 4278190080];
    else
        for (e = Array(lc.length), a = 0; a < lc.length; a++) e[a] = lc[a][0];
    vb = "";
    for (a = 0; a < e.length; a++) vb += d[e[a] >> 20 & 15], vb += d[e[a] >> 16 & 15], vb += d[e[a] >> 12 & 15], vb += d[e[a] >> 8 & 15], vb += d[e[a] >> 4 & 15], vb +=
        d[e[a] & 15]
}

function Ib() {
    var a, b, c = Array(24E4),
        d = tb.length,
        e = Array(12E4),
        f = 0;
    for (a = 0; a < tb.length; a++) c[a] = tb[a];
    var h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 62, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 0, 0, 0, 0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0];
    b = ~~c[0];
    var r = "0123456789:;ABCDEF".split("");
    for (a = 0; a < r.length && c[2] != r[a]; a++);
    na = a - 1; - 1 == na && (na = 2);
    ia = ~~c[3];
    Aa = ~~c[4];
    Ca = ~~c[5];
    Ga = ~~c[6];
    0 == b && (Bb = 100);
    1 <= b && (Bb = h[c[8].charCodeAt(0)], Bb += h[c[9].charCodeAt(0)] << 6);
    r = Array(4096);
    for (a = 0; 4096 > a; a++) r[a] = [];
    var q = 1;
    for (a = 0 == b ? 8 : 16; a < d;) {
        var w = 0,
            z = 1,
            w = h[c[a].charCodeAt(0)] << 6;
        a++;
        w += h[c[a].charCodeAt(0)];
        a++;
        b = a < d ? h[c[a].charCodeAt(0)] : 0;
        a++;
        if (0 < w) {
            for (var A = 0; A < r[w].length; A++) e[f++] = r[w][A];
            z = 1 + r[w].length
        }
        e[f++] = b;
        if (4096 > q) {
            r[q] = Array(z);
            for (b = 0; b < z; b++) r[q][b] = e[f - z + b];
            q++
        }
    }
    e[f++] = 0;
    for (a = b = e[f++] = 0; 12E4 > b;)
        if (c = e[a++],
            c == Oc || c == Tc || 22 == c || 40 == c) nb[b] = c, ob[b] = e[a++], b++;
        else if (32 == c) nb[b] = 30, ob[b] = e[a++], b++;
    else if (48 > e[a]) nb[b] = c, b++;
    else
        for (48 > e[a + 1] ? z = e[a++] - 48 : (z = e[a++] - 48, z += e[a++] - 48 << 4), A = 0; A < z; A++) nb[b++] = c
}

function Jb() {
    var a, b, c, d, e = 0;
    ic.e(1);
    for (c = 0; 300 > c; c++)
        for (b = 0; 400 > b; b++) d = 400 * c + b, 0 == nb[d] ? (d = (c + 8) * g + (b + 8), O[d] = Ld) : 1 == nb[d] ? (d = ((c >> 2) + 2) * s + ((b >> 2) + 2), C[d] = 1, d = (c + 8) * g + (b + 8), O[d] = -1) : 9 == nb[d] ? ge(b + 8, c + 8) : 18 == nb[d] ? he(b + 8, c + 8, 0, 0) : 22 == nb[d] ? he(b + 8, c + 8, 22, ob[d]) : 30 == nb[d] ? he(b + 8, c + 8, 32, ob[d]) : 40 == nb[d] ? ie(b + 8, c + 8, ob[d]) : (e++, 0 >= ia && e > ja[0] && (ia = 1), 1 >= ia && e > ja[1] && (ia = 2), a = je(b + 8, c + 8, nb[d]), nb[d] == Oc ? (I[a].x = 0.1 * Math.cos(ob[d] * Qb / 32), I[a].y = 0.1 * -Math.sin(ob[d] * Qb / 32), O[(c + 8) * g + (b + 8)] = E) : nb[d] == Tc &&
            (J[a] = ob[d]));
    b = new Bc;
    for (a = 0; a < Nd; a++) d = k(Math.random() * Nd), b.set(F[a]), F[a].set(F[d]), F[d].set(b), b.set(I[a]), I[a].set(I[d]), I[d].set(b), c = H[a], H[a] = H[d], H[d] = c, c = J[a], J[a] = J[d], J[d] = c, c = ke[a], ke[a] = ke[d], ke[d] = c, c = R[a], R[a] = R[d], R[d] = c, O[R[a]] = H[a] == Oc ? E : a, O[R[d]] = H[d] == Oc ? E : d;
    zb = Bb
}
Md.prototype.e = function(a) {
    var b, c, d;
    s = 104;
    rc = 79;
    u = 4;
    sc = s * rc;
    for (b = 0; b < sc; b++) le(v[b], 0, 0);
    for (b = 0; b < sc; b++) le(tc[b], 0, 0);
    for (b = 0; b < sc; b++) y[b] = 0;
    for (b = 0; b < sc; b++) uc[b] = 0;
    for (d = c = Cc = 0; d < rc; d++)
        for (b = 0; b < s; b++, c++) Dc[c] = b * u, Ec[c] = d * u;
    for (b = 0; b < sc; b++) C[b] = 0;
    if (0 == a) {
        b = 0;
        for (c = 2 * s + 2; b < s - 4; b++, c++) C[c] = 1;
        b = 0;
        for (c = s * (rc - 3) + 2; b < s - 4; b++, c++) C[c] = 1;
        b = 0;
        for (c = 2 * s + 2; b < rc - 4; b++, c += s) C[c] = 1;
        b = 0;
        for (c = 3 * s - 3; b < rc - 4; b++, c += s) C[c] = 1
    }
    b = 0;
    for (c = s + 1; b < s - 2; b++, c++) C[c] = -1;
    b = 0;
    for (c = s * (rc - 2) + 1; b < s - 2; b++, c++) C[c] = -1;
    b = 0;
    for (c = s + 1; b < rc - 2; b++, c += s) C[c] = -1;
    b = 0;
    for (c = 2 * s - 2; b < rc - 2; b++, c += s) C[c] = -1;
    for (c = b = 0; b < s; b++, c++) C[c] = -1;
    b = 0;
    for (c = s * (rc - 1); b < s; b++, c++) C[c] = -1;
    for (c = b = 0; b < rc; b++, c += s) C[c] = -1;
    b = 0;
    for (c = s - 1; b < rc; b++, c += s) C[c] = -1;
    Fc = 2 * u;
    Gc = 2 * u;
    Hc = Fc;
    Ic = Gc;
    le(Jc, 0, 0);
    Nd = 0;
    me = 4E4;
    for (c = 0; c < 316 * g; c++) O[c] = Ld;
    for (c = 0; c < me; c++) ne[c] = 0;
    Sd = 0;
    oe = 100;
    pe = 0;
    ue = 2E3;
    ve = 0;
    we = 5;
    xe = we / (Qb + Qb) * 2;
    Vd = 0;
    ye = 50;
    Wd = 28;
    for (c = 0; c < ye * Wd; c++) ze[c] = 0;
    for (c = 0; c < ye; c++) K[c] = 0;
    for (c = 0; c < ye; c++) Ae[c] = 0;
    for (c = 0; c < ye; c++) Be[c] = 0;
    for (c = 0; c < ye; c++) Zd[c] =
        0;
    for (c = 0; c < ye; c++) Ce[c] = 0;
    ce = 50;
    for (c = 0; c < ce; c++) de[c] = 0;
    for (c = 0; c < ce; c++) U[c] = 0;
    for (c = 0; c < ce; c++) De[c] = 0;
    for (c = 0; c < ce; c++) N[c] = 0;
    if (0 == a)
        for (c = 8 * g + 8, d = 8; 308 > d; d++, c += 16)
            for (b = 8; 408 > b; b++, c++) a = (d >> 2) * s + (b >> 2), 1 == C[a] && (O[c] = -1);
    for (b = 309 * g - 1; 0 <= b; b--) db[b] = 0, fb[b] = 0, gb[b] = 0;
    zb = 0
};

function Ee(a, b, c, d, e) {
    for (var f = b;;)
        if (0 <= O[f] && H[O[f]] == c) H[O[f]] = d, J[O[f]] = e, ke[O[f]] = 0, f--;
        else break;
    f++;
    for (var h = b + 1;;)
        if (0 <= O[h] && H[O[h]] == c) H[O[h]] = d, J[O[h]] = e, ke[O[h]] = 0, h++;
        else break;
    h--;
    for (b = f; b <= h; b++) 0 <= O[b - g] && H[O[b - g]] == c && Ee(a, b - g, c, d, e), 0 <= O[b + g] && H[O[b + g]] == c && Ee(a, b + g, c, d, e)
}
Md.prototype.move = function() {
    var a, b, c, d, e = new Bc,
        f = new Bc,
        h = new Bc;
    if (!ga && 0 == za) {
        Hc = Fc;
        Ic = Gc;
        Fc = Fe(Ge + 2 * u, 2 * u, u * (s - 2) - 1);
        Gc = Fe(He + 2 * u, 2 * u, u * (rc - 2) - 1);
        0 < pa && (Fc = 2 * u + k(qa) + (Ge >> pa), Gc = 2 * u + k(ra) + (He >> pa), Fc = Fe(Fc, 2 * u, u * (s - 2) - 1), Gc = Fe(Gc, 2 * u, u * (rc - 2) - 1));
        if (1 == Ha)
            if (Me || Oe) Ja = Fc, Ka = Gc;
            else {
                if (Pe || Se) Hc = Ja, Ic = Ka
            } else if (2 == Ha) {
            if (Me || Oe) Ia = 0;
            else if (Ue || Ve) 0 == Ia && (We(Fc - Hc) > We(Gc - Ic) ? Ia = 1 : We(Fc - Hc) < We(Gc - Ic) && (Ia = 2));
            else if (Pe || Se) Ia = 0;
            1 == Ia ? Gc = Ic : 2 == Ia && (Fc = Hc)
        }
        le(e, Fc, Gc);
        le(Jc, Hc - 5 * Jc.x, Ic - 5 * Jc.y);
        var r = Jc,
            q = 5,
            w = 0.5,
            z = 0.5;
        Xe(Ye, e, r);
        q -= Ze(Ye);
        w *= q;
        z *= q;
        e.x += Ye.x * w;
        e.y += Ye.y * w;
        r.x -= Ye.x * z;
        r.y -= Ye.y * z;
        Xe(Jc, e, Jc);
        Ze(Jc);
        $e(this, 0);
        $e(this, 1);
        if (Me || Oe) zb = Fe(zb + 1, 0, 4095)
    }
    for (var A = [1, 2, 4, 8], P = 0; P < A[Ca]; P++) {
        var x = 0;
        for (a = 0; a < sc; a++) 0 == C[a] && x++;
        if (0 < x) {
            Cc /= x;
            for (a = 0; a < sc; a++) 0 == C[a] && (y[a] += Cc);
            Cc = 0
        }
        if (1 == Ba && !(af && 0 == za && Rb[10] | Rb[13])) break;
        for (a = 0; a < sc; a++) tc[a].set(v[a]);
        b = 2 * s + 2;
        for (d = 2; d < rc - 2; d++, b += 4)
            for (c = 2; c < s - 2; c++, b++)
                if (1 != C[b]) {
                    e.set(v[b]);
                    var Ea = Ze(e);
                    if (0 != Ea) {
                        var Qa = We(e.x),
                            Wa =
                            We(e.y),
                            La = Qa / (Qa + Wa) * Ea * 0.5,
                            Sa = Wa / (Qa + Wa) * Ea * 0.5;
                        bf(f, e, La);
                        bf(h, e, Sa);
                        var fa = 0 > e.x ? -1 : 1,
                            ld = 0 > e.y ? -s : s;
                        Qa > Wa ? (0 >= C[b + fa] ? (tc[b].sub(f), tc[b + fa].add(f), y[b + fa] += La, y[b] -= La) : (tc[b].sub(f), tc[b].sub(f)), 0 >= C[b + fa + ld] ? (tc[b].sub(h), tc[b + fa + ld].add(h), y[b] -= Sa, y[b + fa + ld] += Sa) : (tc[b].sub(h), tc[b].sub(h))) : (0 >= C[b + ld] ? (tc[b].sub(h), tc[b + ld].add(h), y[b] -= Sa, y[b + ld] += Sa) : (tc[b].sub(h), tc[b].sub(h)), 0 >= C[b + ld + fa] ? (tc[b].sub(f), tc[b + ld + fa].add(f), y[b] -= La, y[b + ld + fa] += La) : (tc[b].sub(f), tc[b].sub(f)))
                    }
                }
        for (a =
            0; a < sc; a++) uc[a] = y[a];
        b = 2 * s + 2;
        var Bf = -1 - s,
            Cf = 1 - s,
            Df = -1 + s,
            Ef = 1 + s;
        for (d = 2; d < rc - 2; d++, b += 4)
            for (c = 2; c < s - 2; c++, b++) 1 != C[b] && (0 >= C[b - 1] && (tc[b].x -= 0.0625 * (y[b] - y[b - 1]), uc[b] -= 0.0625 * (y[b] - y[b - 1])), 0 >= C[b + 1] && (tc[b].x += 0.0625 * (y[b] - y[b + 1]), uc[b] -= 0.0625 * (y[b] - y[b + 1])), 0 >= C[b - s] && (tc[b].y -= 0.0625 * (y[b] - y[b - s]), uc[b] -= 0.0625 * (y[b] - y[b - s])), 0 >= C[b + s] && (tc[b].y += 0.0625 * (y[b] - y[b + s]), uc[b] -= 0.0625 * (y[b] - y[b + s])), 0 >= C[b + Bf] && (tc[b].x -= 0.044194173 * (y[b] - y[b + Bf]), tc[b].y -= 0.044194173 * (y[b] - y[b + Bf]), uc[b] -= 0.044194173 *
                (y[b] - y[b + Bf])), 0 >= C[b + Cf] && (tc[b].x += 0.044194173 * (y[b] - y[b + Cf]), tc[b].y -= 0.044194173 * (y[b] - y[b + Cf]), uc[b] -= 0.044194173 * (y[b] - y[b + Cf])), 0 >= C[b + Df] && (tc[b].x -= 0.044194173 * (y[b] - y[b + Df]), tc[b].y += 0.044194173 * (y[b] - y[b + Df]), uc[b] -= 0.044194173 * (y[b] - y[b + Df])), 0 >= C[b + Ef] && (tc[b].x += 0.044194173 * (y[b] - y[b + Ef]), tc[b].y += 0.044194173 * (y[b] - y[b + Ef]), uc[b] -= 0.044194173 * (y[b] - y[b + Ef])));
        for (a = 0; a < sc; a++) - 1 != C[a] ? (v[a].set(tc[a]), y[a] = uc[a]) : (y[a] = 0, le(v[a], 0, 0));
        a: {
            for (var Q = void 0, qe = new Bc, td = void 0, md = void 0,
                    kg = void 0, Ie = void 0, Je = void 0, td = 0; td < Sd; td++)
                for (md = (Td[td] - 16) * g + (Ud[td] - 16), Je = 0; 32 > Je; Je++, md += g - 32)
                    for (Ie = 0; 32 > Ie; Ie++, md++) - 3 == O[md] && (O[md] = Ld);
            for (td = 0; td < Sd; td++)
                for (md = (Td[td] - 16) * g + (Ud[td] - 16), kg = 32 * k(cf[td]) * ac.c, Je = 0; 32 > Je; Je++, md += g - 32)
                    for (Ie = 0; 32 > Ie; Ie++, md++, kg++) 4278190080 == ac.b[kg] && O[md] <= E && (O[md] = -3);
            var Ug = !0;
            if (ga || 0 != za) Ug = !1;
            for (var Ch = 42 == da && Me || 42 == ea && Oe ? !0 : !1, Dh = 42 == da && Ue || 42 == ea && Ve ? !0 : !1, Q = 0; Q < Nd; Q++) {
                if (Ug)
                    if (0 == ne[Q]) {
                        if (Ch) {
                            if (H[Q] == Oc) break a;
                            qe.x = Fc - F[Q].x;
                            qe.y =
                                Gc - F[Q].y;
                            df(qe) < 4 * ha && (ne[Q] = 1)
                        }
                    } else Dh ? (I[Q].x += 0.1 * (Fc - F[Q].x), I[Q].y += 0.1 * (Gc - F[Q].y)) : ne[Q] = 0;
                Q = H[Q] <= Vc ? Q - jf(Q, qe) : H[Q] <= jd ? Q - kf(Q, qe) : H[Q] <= yd ? Q - mf(Q, qe) : Q - nf(Q, qe)
            }
            if (0 == Ga)
                for (Q = 0; Q < Nd; Q++) 8 > F[Q].x ? V(Q--) : 408 <= F[Q].x ? V(Q--) : 8 > F[Q].y ? V(Q--) : 308 <= F[Q].y && V(Q--);
            else if (1 == Ga)
                for (Q = 0; Q < Nd; Q++)
                    if (8 > F[Q].x) {
                        var vc = R[Q] + 400;
                        O[vc] <= E && !(8 > F[Q].y || 308 <= F[Q].y) ? (O[R[Q]] = Ld, F[Q].x += 400, O[vc] = Q, R[Q] = vc) : V(Q--)
                    } else 408 <= F[Q].x ? (vc = R[Q] - 400, O[vc] <= E && !(8 > F[Q].y || 308 <= F[Q].y) ? (O[R[Q]] = Ld, F[Q].x -= 400,
                        O[vc] = Q, R[Q] = vc) : V(Q--)) : 8 > F[Q].y ? (vc = R[Q] + 300 * g, O[vc] <= E ? (O[R[Q]] = Ld, F[Q].y += 300, O[vc] = Q, R[Q] = vc) : V(Q--)) : 308 <= F[Q].y && (vc = R[Q] - 300 * g, O[vc] <= E ? (O[R[Q]] = Ld, F[Q].y -= 300, O[vc] = Q, R[Q] = vc) : V(Q--))
        }
        var Ma = void 0,
            Fa = void 0,
            be = void 0,
            Ed = void 0,
            ud = void 0,
            Ke = void 0,
            Ff = void 0,
            Ih = [0, 0, 1, 4, -3, 1, 0, 2, 0, 0, 4, 1, 1, 8, 3, 8, 3, 4, 0, 9, 9, 1, 0, 5, 1, 0, -1, 4, 100, 9, 0, 10, 0, 0, 6, 1, 1, 5, 8, 0, 0, 20, 1, 4, -2, 9];
        if (42 == da && Ue || 42 == ea && Ve)
            for (var ef = new Bc, Ma = 0; Ma < Sd; Ma++) ef.x = Fc - Ud[Ma], ef.y = Gc - Td[Ma], 16 > df(ef) && (of[Ma] -= ef.x * (Gc - Ic) - ef.y * (Fc -
                Hc));
        for (Ma = 0; Ma < Sd; Ma++) {
            Fa = (Td[Ma] - 16) * g + (Ud[Ma] - 16);
            be = 32 * k(cf[Ma]) * ac.c;
            for (ud = 0; 32 > ud; ud++, Fa += g - 32)
                for (Ed = 0; 32 > Ed; Ed++, Fa++, be++) {
                    if (4278190080 == ac.b[be]) {
                        var Le = (Td[Ma] + ud - 16 >> 2) * s + (Ud[Ma] + Ed - 16 >> 2),
                            Ff = v[Le].x * (ud - 15.5) - v[Le].y * (Ed - 15.5);
                        of[Ma] += 1E-4 * Ff
                    }
                    Ke = O[Fa];
                    0 > Ke || 4286611584 != ac.b[be] || 4278190080 != ac.b[be + ac.c] || 31 == ud || (Ff = 0 * (ud - 15.5) - 1 * (Ed - 15.5), of[Ma] += Ff * Ih[H[Ke]] * 1E-4)
                }
            of[Ma] *= 0.99;
            of[Ma] = Fe(of[Ma], -2, 2);
            var ff = k(cf[Ma] + 16);
            cf[Ma] += of[Ma];
            ff = k(cf[Ma] + 16) - ff;
            0 > cf[Ma] && (cf[Ma] += 16);
            16 <= cf[Ma] && (cf[Ma] -= 16);
            if (0 != ff) {
                pf = 0;
                Fa = (Td[Ma] - 16) * g + (Ud[Ma] - 16);
                be = 32 * k(cf[Ma]) * ac.c;
                for (ud = 0; 32 > ud; ud++, Fa += g - 32)
                    for (Ed = 0; 32 > Ed; Ed++, Fa++, be++) 4286611584 == ac.b[be] && (Ke = O[Fa], 0 > Ke || (qf[pf] = Ke, rf[pf] = (ud - 15.5) * ff * 0.1, sf[pf] = -(Ed - 15.5) * ff * 0.1, pf++));
                for (Fa = 0; Fa < pf; Fa++) O[R[qf[Fa]]] = Ld, Le = k(F[qf[Fa]].y) * g + k(F[qf[Fa]].x + rf[Fa]), -1 > O[Le] && (F[qf[Fa]].x += rf[Fa]), Le = k(F[qf[Fa]].y + sf[Fa]) * g + k(F[qf[Fa]].x), -1 > O[Le] && (F[qf[Fa]].y += sf[Fa]), R[qf[Fa]] = k(F[qf[Fa]].y) * g + k(F[qf[Fa]].x), O[R[qf[Fa]]] = qf[Fa], 6 ==
                    H[qf[Fa]] ? 20 > W(100) && (H[qf[Fa]] = Kc) : H[qf[Fa]] == Pc ? H[qf[Fa]] = 11 : H[qf[Fa]] == Ad ? H[qf[Fa]] = Nc : H[qf[Fa]] == Cd && 10 > W(100) && (H[qf[Fa]] = zd, ke[qf[Fa]] = 0)
            }
        }
        for (var oa = void 0, Da = void 0, pc = new Bc, Ne = void 0, oa = 0; oa < pe; oa++) Da = (k(tf[oa]) >> 2) * s + (k(uf[oa]) >> 2), pc.set(v[Da]), vf(pc, 3.8 / (df(pc) + 1)), uf[oa] += pc.x, tf[oa] += pc.y;
        for (oa = 0; oa < pe; oa++)
            if (0 == wf[oa]) {
                if (42 == da && Me || 42 == ea && Oe) pc.x = Fc - uf[oa], pc.y = Gc - tf[oa], 10 > df(pc) && (wf[oa] = 1)
            } else 42 == da && Ue || 42 == ea && Ve ? (uf[oa] += 0.9 * (Fc - uf[oa]), tf[oa] += 0.9 * (Gc - tf[oa])) : wf[oa] =
                0;
        for (oa = 0; oa < pe - 1;) {
            for (var Gf = xf[oa], re = 0, Da = oa; Da < pe && Gf == xf[Da]; Da++, re++);
            le(pc, 0, 0);
            for (Da = oa; Da < oa + re; Da++) pc.x += uf[Da], pc.y += tf[Da];
            var Hf = pc,
                Vg = re;
            Hf.x /= Vg;
            Hf.y /= Vg;
            for (Da = oa; Da < oa + re; Da++) {
                var gf = new Bc;
                gf.x = pc.x - uf[Da];
                gf.y = pc.y - tf[Da];
                Ne = Ze(gf);
                0 != Ne && (Ne = re * xe - Ne, uf[Da] -= gf.x * Ne * 0.1, tf[Da] -= gf.y * Ne * 0.1)
            }
            for (Da = oa; Da < oa + re - 1; Da++) yf(Da, Da + 1);
            yf(Da, oa);
            oa += re
        }
        for (oa = 0; oa < pe; oa++) {
            Da = 0;
            if (0 <= uf[oa] && uf[oa] < g && 0 <= tf[oa] && 316 > tf[oa]) {
                Da = k(tf[oa]) * g + k(uf[oa]);
                if (O[Da] <= E) continue;
                if (0 <= O[Da] &&
                    H[O[Da]] == hd) continue
            }
            var Gf = xf[oa],
                wc, nd;
            for (wc = oa; 0 < wc && Gf == xf[wc - 1]; wc--);
            for (nd = wc + 1; nd < pe && Gf == xf[nd]; nd++);
            for (var hf = O[Da], hf = 0 <= hf ? H[hf] : Qc, Da = wc; Da < nd - 1; Da++) zf(uf[Da], tf[Da], uf[Da + 1], tf[Da + 1], hf);
            zf(uf[Da], tf[Da], uf[wc], tf[wc], hf);
            for (oa = wc - 1; nd < pe; wc++, nd++) uf[wc] = uf[nd], tf[wc] = tf[nd], xf[wc] = xf[nd], wf[wc] = wf[nd];
            pe -= nd - wc
        }
        for (var ng = 0; ng < Vd; ng++) {
            var B = ng,
                S = void 0,
                n = void 0,
                xc = new Bc,
                n = B * Wd;
            if (K[B] == $d) {
                var og = 0 == Ce[B] ? Tb[37] : Tb[65] | Tb[97],
                    pg = 0 == Ce[B] ? Tb[39] : Tb[68] | Tb[100],
                    Yg = 0 == Ce[B] ? Tb[38] :
                    Tb[87] | Tb[119],
                    Zg = 0 == Ce[B] ? Tb[40] : Tb[83] | Tb[115],
                    Yb = 0 == Ce[B] ? 0 : 1;
                Ae[B]++;
                var If = O[(k(X[n + 4].y) + 1) * g + k(X[n + 4].x)] > E ? 1 : 0,
                    Jf = O[(k(X[n + 5].y) + 1) * g + k(X[n + 5].x)] > E ? 1 : 0;
                0 == If && (If = O[k(X[n + 4].y) * g + k(X[n + 4].x)] > E ? 1 : 0);
                0 == Jf && (Jf = O[k(X[n + 5].y) * g + k(X[n + 5].x)] > E ? 1 : 0);
                if (Zg && Zd[B] == vd)
                    for (S = 0; 6 > S; S++) Af(n + S, 0.01, 0.997);
                else Af(n + 0, -0.2, 0.995), Af(n + 1, -0.1, 0.995), Af(n + 2, 0, 0.995), Af(n + 3, 0, 0.995), Af(n + 4, 0.3, 0.995), Af(n + 5, 0.3, 0.995);
                L[n].add(Mf[B]);
                vf(Mf[B], 0.5);
                0 != Mf[B].x && (K[B] = $d + 2);
                0 < Nf[Yb] && Nf[Yb]--;
                if (0 != Nf[Yb] ||
                    1 != If && 1 != Jf) pg ? (0 > L[n + 1].x - X[n + 1].x && (L[n + 1].x += 0.1), Of[Yb] = 1) : og && (0 < L[n + 1].x - X[n + 1].x && (L[n + 1].x -= 0.1), Of[Yb] = 0);
                else {
                    var T = 0.8;
                    pg ? (Nf[Yb] = 15, L[n + 4].x < L[n + 5].x ? (L[n + 2].x += 4 * T, L[n + 2].y -= 3 * T) : (L[n + 3].x += 4 * T, L[n + 3].y -= 3 * T), Of[Yb] = 1) : og && (Nf[Yb] = 15, L[n + 4].x > L[n + 5].x ? (L[n + 2].x -= 4 * T, L[n + 2].y -= 3 * T) : (L[n + 3].x -= 4 * T, L[n + 3].y -= 3 * T), Of[Yb] = 0)
                }
                1 < Pf[Yb] && Pf[Yb]--;
                0 < Pf[Yb] && (1 == If || 1 == Jf) && Pf[Yb]--;
                0 == Pf[Yb] && Yg && (Pf[Yb] = 50, L[n + 4].y -= 6, L[n + 5].y -= 6);
                T = 0.5;
                Vf(n + 0, n + 1, 4, T, T);
                Vf(n + 1, n + 2, 4, T, T);
                Vf(n + 1, n + 3, 4, T, T);
                Vf(n + 2, n + 4, 5, T, T);
                Vf(n + 3, n + 5, 5, T, T);
                Vf(n + 2, n + 3, 5, 0.1, 0.1);
                for (var Yc = 0.1, S = 0; 4 > S; S++) Wf(n + S, Yc, 1, 0 < Be[B] ? 1 : 0);
                for (S = 4; 6 > S; S++) Wf(n + S, Yc, 0, 0 < Be[B] ? 1 : 0);
                for (var hb = 0; 3 > hb; hb++)
                    for (var ib = -1; 2 > ib; ib++) {
                        var Kf = O[(k(X[n + 0].y) + hb) * g + (k(X[n + 0].x) + ib)];
                        Kf == E ? Zd[B] = Oc : 0 <= Kf && 1 == Xf[H[Kf]] && (Zd[B] = H[Kf])
                    }
                if ((!Yg || !og && !pg) && Zg && 0 != Zd[B])
                    if (ib = k(L[n + 0].x), hb = k(L[n + 0].y) + 1, Zd[B] == dd && (ib += 0 == Of[Yb] ? 8 : -8, hb += 12), ib = Fe(ib, 8, 407), hb = Fe(hb, 8, 307), Zd[B] == Oc) {
                        var ka = (hb >> 2) * s + (ib >> 2);
                        0 == C[ka] && (v[ka].x += 0 == Of[Yb] ? -1 :
                            1)
                    } else Zd[B] != vd && O[hb * g + ib] == Ld && (ka = je(ib, hb, Zd[B]), 0 <= ka && (0 == Of[Yb] ? (I[ka].x -= 20, I[ka].y += W(3) - 1) : 1 == Of[Yb] && (I[ka].x += 20, I[ka].y += W(3) - 1), Zd[B] == D ? (I[ka].x *= 3, I[ka].y += 18, J[ka] = 2) : Zd[B] == Rc ? I[ka].y = 20 : Zd[B] == Wc ? (I[ka].x *= 0.1, I[ka].y *= 0.1) : Zd[B] == od && (J[ka] = 0 == Of[Yb] ? 5 : 1)));
                if (3 == Yf(n, n + 6) || -5 == Yf(n, n + 6)) K[B] = $d + 2;
                if (1 == Ga)
                    for (var Ab = 4; 5 >= Ab; Ab++)
                        if (ib = hb = 0, 8 > L[n + Ab].x ? (ib = 406, hb = k(X[n + Ab].y)) : g - 8 <= L[n + Ab].x && (ib = 10, hb = k(X[n + Ab].y)), 0 != ib + hb) {
                            K[B] = $d;
                            ka = hb * g + ib;
                            if (!(O[ka] <= E))
                                if (-1 >= O[ka]) {
                                    L[n +
                                        Ab].set(X[n + Ab]);
                                    continue
                                } else if (2 != Zf[H[O[ka]]]) {
                                L[n + Ab].set(X[n + Ab]);
                                continue
                            }
                            Xe(xc, L[n + Ab], X[n + Ab]);
                            Ze(xc);
                            for (B = 0; 10 >= B; B++) L[n + B].x = ib + xc.x + Y(-0.1, 0.1), L[n + B].y = hb + xc.y + Y(-0.1, 0.1), le(X[n + B], ib, hb);
                            break
                        }
            } else if (K[B] == $d + 2) L[n + 10].set(L[n + 5]), X[n + 10].set(X[n + 5]), L[n + 9].set(L[n + 4]), X[n + 9].set(X[n + 4]), L[n + 8].set(L[n + 3]), X[n + 8].set(X[n + 3]), L[n + 7].set(L[n + 3]), X[n + 7].set(X[n + 3]), L[n + 6].set(L[n + 2]), X[n + 6].set(X[n + 2]), L[n + 5].set(L[n + 2]), X[n + 5].set(X[n + 2]), L[n + 4].set(L[n + 1]), X[n + 4].set(X[n + 1]), L[n +
                3].set(L[n + 1]), X[n + 3].set(X[n + 1]), L[n + 2].set(L[n + 1]), X[n + 2].set(X[n + 1]), L[n + 1].set(L[n + 0]), X[n + 1].set(X[n + 0]), L[n + 0].set(L[n + 0]), X[n + 0].set(X[n + 0]), Mf[B].y -= 1, Ae[B] = 0, K[B] = $d + 3;
            else if (K[B] == $d + 3) {
                Ae[B]++;
                for (S = 0; 11 > S; S++) Af(n + S, 0.1, 0.999), L[n + S].add(Mf[B]);
                vf(Mf[B], 0.5);
                var T = 0.5,
                    wd = (150 - Ae[B]) / 150;
                Vf(n + 1, n + 2, 4 * wd, T, T);
                Vf(n + 3, n + 5, 4 * wd, T, T);
                Vf(n + 4, n + 7, 4 * wd, T, T);
                Vf(n + 6, n + 9, 5 * wd, T, T);
                Vf(n + 8, n + 10, 5 * wd, T, T);
                Yc = 0.1;
                for (S = 0; 11 > S; S++) Wf(n + S, Yc, 0, 0);
                150 < Ae[B] && $f(B--)
            } else if (K[B] == Xd || K[B] == Xd + 1) {
                Ae[B]++;
                K[B] == Xd ? (Af(n + 0, -0.2, 0.995), Af(n + 1, -0.1, 0.995), Af(n + 2, 0, 0.995), Af(n + 3, 0, 0.995), Af(n + 4, 0.3, 0.995), Af(n + 5, 0.3, 0.995)) : (Af(n + 0, 0.1, 0.995), Af(n + 1, 0.1, 0.995), Af(n + 2, 0.1, 0.995), Af(n + 3, 0.1, 0.995), Af(n + 4, 0.1, 0.995), Af(n + 5, 0.1, 0.995));
                ag(B, n, n + 6);
                L[n].add(Mf[B]);
                vf(Mf[B], 0.5);
                if (K[B] == Xd) {
                    if (0 != ze[n + 4] && 0 != ze[n + 5]) {
                        var ah = k(W(100));
                        5 > ah ? L[n + 4].x < L[n + 5].x ? (L[n + 4].x += 4, L[n + 4].y -= 4) : (L[n + 5].x += 4, L[n + 5].y -= 4) : 10 > ah && (L[n + 4].x > L[n + 5].x ? (L[n + 4].x -= 4, L[n + 4].y -= 4) : (L[n + 5].x -= 4, L[n + 5].y -= 4))
                    } else 0 != ze[n + 4] ? 2 > W(100) &&
                        (L[n + 4].x += Y(-4, 4), L[n + 4].y -= 4) : 0 != ze[n + 5] && 2 > W(100) && (L[n + 5].x += Y(-4, 4), L[n + 5].y -= 4);
                    for (var la = void 0, la = 0; la < Vd; la++)
                        if (B != la && (K[la] == Xd || K[la] == Xd + 1 || K[la] == $d)) {
                            var ka = la * Wd,
                                se = We(L[n + 4].x - L[ka].x),
                                Rd = L[n + 4].y - L[ka].y;
                            2 >= se && 0 <= Rd && 6 >= Rd && (Mf[la].x += 1 * (L[n + 4].x - X[n + 4].x), Mf[la].y += 2 * (L[n + 4].y - X[n + 4].y), K[la] == Xd && (K[la] = Xd + 1), Ae[la] = 0);
                            se = We(L[n + 5].x - L[ka].x);
                            Rd = L[n + 5].y - L[ka].y;
                            2 >= se && 0 <= Rd && 6 >= Rd && (Mf[la].x += 1 * (L[n + 5].x - X[n + 5].x), Mf[la].y += 2 * (L[n + 5].y - X[n + 5].y), K[la] == Xd && (K[la] = Xd + 1), Ae[la] =
                                0)
                        }
                } else 10 < Ae[B] && (0 != ze[n + 4] || 0 != ze[n + 5]) && 10 > W(100) && (K[B] = Xd, Ae[B] = 0);
                T = 0.5;
                Vf(n + 0, n + 1, 4, T, T);
                Vf(n + 1, n + 2, 4, T, T);
                Vf(n + 1, n + 3, 4, T, T);
                Vf(n + 2, n + 4, 5, T, T);
                Vf(n + 3, n + 5, 5, T, T);
                Vf(n + 2, n + 3, 5, 0.1, 0.1);
                Yc = 0.1;
                for (S = 0; 4 > S; S++) Wf(n + S, Yc, 1, 0 < Be[B] ? 1 : 0);
                for (S = 4; 6 > S; S++) Wf(n + S, Yc, 0, 0 < Be[B] ? 1 : 0);
                if (3 == Yf(n, n + 6) || -5 == Yf(n, n + 6)) K[B] = Xd + 2;
                K[B] == Xd && (0 != Yf(n, n + 6) ? Ae[B] = 0 : 50 < Ae[B] && (K[B] = Xd + 1));
                if (1 == Ga)
                    for (Ab = 4; 5 >= Ab; Ab++)
                        if (ib = hb = 0, 8 > L[n + Ab].x ? (ib = 406, hb = k(X[n + Ab].y)) : g - 8 <= L[n + Ab].x && (ib = 10, hb = k(X[n + Ab].y)), 0 != ib + hb) {
                            K[B] =
                                Xd;
                            Ae[B] = 0;
                            ka = hb * g + ib;
                            if (!(O[ka] <= E))
                                if (-1 >= O[ka]) {
                                    L[n + Ab].set(X[n + Ab]);
                                    continue
                                } else if (2 != Zf[H[O[ka]]]) {
                                L[n + Ab].set(X[n + Ab]);
                                continue
                            }
                            Xe(xc, L[n + Ab], X[n + Ab]);
                            Ze(xc);
                            for (B = 0; 10 >= B; B++) L[n + B].x = ib + xc.x + Y(-0.1, 0.1), L[n + B].y = hb + xc.y + Y(-0.1, 0.1), le(X[n + B], ib, hb);
                            break
                        }
            } else if (K[B] == Xd + 2) L[n + 10].set(L[n + 5]), X[n + 10].set(X[n + 5]), L[n + 9].set(L[n + 4]), X[n + 9].set(X[n + 4]), L[n + 8].set(L[n + 3]), X[n + 8].set(X[n + 3]), L[n + 7].set(L[n + 3]), X[n + 7].set(X[n + 3]), L[n + 6].set(L[n + 2]), X[n + 6].set(X[n + 2]), L[n + 5].set(L[n + 2]), X[n + 5].set(X[n +
                2]), L[n + 4].set(L[n + 1]), X[n + 4].set(X[n + 1]), L[n + 3].set(L[n + 1]), X[n + 3].set(X[n + 1]), L[n + 2].set(L[n + 1]), X[n + 2].set(X[n + 1]), L[n + 1].set(L[n + 0]), X[n + 1].set(X[n + 0]), L[n + 0].set(L[n + 0]), X[n + 0].set(X[n + 0]), Mf[B].y -= 1, Ae[B] = 0, K[B] = Xd + 3;
            else if (K[B] == Xd + 3) {
                Ae[B]++;
                for (S = 0; 11 > S; S++) Af(n + S, 0.1, 0.999), L[n + S].add(Mf[B]);
                vf(Mf[B], 0.5);
                T = 0.5;
                wd = (150 - Ae[B]) / 150;
                Vf(n + 1, n + 2, 4 * wd, T, T);
                Vf(n + 3, n + 5, 4 * wd, T, T);
                Vf(n + 4, n + 7, 4 * wd, T, T);
                Vf(n + 6, n + 9, 5 * wd, T, T);
                Vf(n + 8, n + 10, 5 * wd, T, T);
                Yc = 0.1;
                for (S = 0; 11 > S; S++) Wf(n + S, Yc, 0, 0);
                150 < Ae[B] && $f(B--)
            } else if (K[B] ==
                Yd) {
                Ae[B]++;
                for (S = 0; 4 > S; S++) Af(n + S, 0.1, 1);
                ag(B, n, n + 4);
                for (S = 0; 4 > S; S++)
                    for (la = 0; la < Vd; la++)
                        if (K[la] == Xd || K[la] == Xd + 1 || K[la] == $d) ka = la * Wd, se = We(L[ka + 4].x - L[n + S].x), Rd = We(L[ka + 4].y - L[n + S].y), 3 >= se && 3 >= Rd && (L[n + S].x += 1 * (L[ka + 4].x - X[ka + 4].x), L[n + S].y += 2 * (L[ka + 4].y - X[ka + 4].y)), se = We(L[ka + 5].x - L[n + S].x), Rd = We(L[ka + 5].y - L[n + S].y), 3 >= se && 3 >= Rd && (L[n + S].x += 1 * (L[ka + 5].x - X[ka + 5].x), L[n + S].y += 2 * (L[ka + 5].y - X[ka + 5].y));
                var T = 0.5,
                    xd = 4 * (Zd[B] + 1);
                Vf(n + 0, n + 1, xd, T, T);
                Vf(n + 1, n + 2, xd, T, T);
                Vf(n + 2, n + 3, xd, T, T);
                Vf(n + 3, n + 0,
                    xd, T, T);
                Vf(n + 0, n + 2, 1.4142135 * xd, T, T);
                Vf(n + 1, n + 3, 1.4142135 * xd, T, T);
                Yc = 0.5;
                for (S = 0; 4 > S; S++) Wf(n + S, Yc, 0, 1);
                if (3 == Yf(n, n + 6) || -5 == Yf(n, n + 6)) K[B] = Yd + 1
            } else if (K[B] == Yd + 1) L[n + 7].set(L[n + 0]), X[n + 7].set(X[n + 0]), L[n + 6].set(L[n + 3]), X[n + 6].set(X[n + 3]), L[n + 5].set(L[n + 3]), X[n + 5].set(X[n + 3]), L[n + 4].set(L[n + 2]), X[n + 4].set(X[n + 2]), L[n + 3].set(L[n + 2]), X[n + 3].set(X[n + 2]), L[n + 2].set(L[n + 1]), X[n + 2].set(X[n + 1]), L[n + 1].set(L[n + 1]), X[n + 1].set(X[n + 1]), L[n + 0].set(L[n + 0]), X[n + 0].set(X[n + 0]), Be[B] = 0, Ae[B] = 0, K[B] = -5 == Yf(n, n + 4) ?
                Yd + 3 : Yd + 2;
            else if (K[B] == Yd + 2 || K[B] == Yd + 3) {
                Ae[B]++;
                ag(B, n, n + 8);
                for (S = 0; 8 > S; S++) Af(n + S, 0.1, 0.999);
                T = 0.5;
                xd = (150 - Ae[B]) / 150 * (Zd[B] + 1) * 4;
                Vf(n + 0, n + 1, xd, T, T);
                Vf(n + 2, n + 3, xd, T, T);
                Vf(n + 4, n + 5, xd, T, T);
                Vf(n + 6, n + 7, xd, T, T);
                if (K[B] == Yd + 2 && 1E3 <= ja[ia] - Nd)
                    for (S = 0; 8 > S; S += 2) Xe(xc, X[n + S + 1], X[n + S]), vf(xc, W(1)), xc.add(X[n + S]), ka = k(xc.y) * g + k(xc.x), O[ka] <= E && je(k(xc.x), k(xc.y), D);
                Yc = 0.1;
                for (S = 0; 8 > S; S++) Wf(n + S, Yc, 0, 0);
                150 < Ae[B] && $f(B--)
            } else if (K[B] == ae)
                if (0 == ze[n]) {
                    for (la = 0; la < Vd; la++)
                        if (!(L[n].x + 8 < L[la * Wd].x || L[la * Wd].x <
                                L[n].x - 4 || L[n].y + 8 < L[la * Wd].y || L[la * Wd].y < L[n].y - 4))
                            if (K[la] == Xd || K[la] == Yd) ze[n] = K[la], Zd[B] = Zd[la];
                            else if (K[la] == $d) {
                        for (var lf = 0; lf < Vd; lf++) K[lf] == ae && ze[lf * Wd] == $d && (ze[lf * Wd] = 0);
                        ze[n] = K[la];
                        Zd[B] = Zd[la]
                    }
                    for (la = 0; la < ce; la++) 0 == de[la] || L[n].x + 8 < M[la].x || M[la].x < L[n].x - 4 || L[n].y + 8 < M[la].y || M[la].y < L[n].y - 4 || (ze[n] = -2, Zd[B] = N[la])
                } else ib = k(L[n + 0].x), hb = k(L[n + 0].y), ze[n] == $d ? 10 > W(100) && he(ib, hb, 30, Zd[B]) : 1 > W(100) && (ze[n] == Xd ? he(ib, hb, 0, 0) : ze[n] == Yd ? he(ib, hb, 22, Zd[B]) : -2 == ze[n] && ie(ib + 2, hb + 2, Zd[B]))
        }
        for (var t =
                void 0, Ra = void 0, aa = void 0, Zc = new Bc, t = 0; t < ce; t++)
            if (0 != de[t])
                if (0 == bg[N[t]]) de[t] = 0;
                else {
                    aa = k(M[t].y) * g + k(M[t].x);
                    for (Ra = 0; 21 > Ra; Ra++) - 2 == O[aa + cg[Ra]] && (O[aa + cg[Ra]] = Ld);
                    var rg = dg[N[t]];
                    Z[t].y += rg;
                    var Lf = eg[N[t]];
                    if (0 != Lf) {
                        var Fd = (k(M[t].y) >> 2) * s + (k(M[t].x) >> 2);
                        Z[t].x += v[Fd].x * Lf;
                        Z[t].y += v[Fd].y * Lf;
                        0.3 < df(v[Fd]) && vf(Z[t], 0.9 + (1 - Lf) / 10)
                    }
                    var ad = t,
                        sg = new Bc;
                    if (0 == De[ad]) {
                        if (42 == da && Me || 42 == ea && Oe) sg.x = Fc - M[ad].x, sg.y = Gc - M[ad].y, 20 > df(sg) && (De[ad] = 1)
                    } else 42 == da && Ue || 42 == ea && Ve ? (Z[ad].x += 0.05 * (Fc - M[ad].x),
                        Z[ad].y += 0.05 * (Gc - M[ad].y), vf(Z[ad], 0.9)) : (vf(Z[ad], 0.3), De[ad] = 0);
                    for (var Qe = 0; Qe < Vd; Qe++)
                        if (K[Qe] == Xd || K[Qe] == Xd + 1 || K[Qe] == $d)
                            for (var Fd = Qe * Wd, ee = 4; 5 >= ee; ee++) {
                                var Mh = We(L[Fd + ee].y - M[t].y);
                                9 >= We(L[Fd + ee].x - M[t].x) && 9 >= Mh && (Z[t].x += 0.1 * (L[Fd + ee].x - X[Fd + ee].x), Z[t].y += 0.2 * (L[Fd + ee].y - X[Fd + ee].y))
                            }
                        var Re = new Bc;
                    Re.set(Z[t]);
                    fg = 0;
                    for (var bh = k(gg(Z[t]) / 2) + 1, fe = 1 / bh, bd, cd, Te = 0, bc = new Bc, Gd, G = 0, ch = 0; ch < bh; ch++) {
                        bd = M[t].x + Z[t].x * fe;
                        cd = M[t].y + Z[t].y * fe;
                        if (4 > bd || g - 4 <= bd || 4 > cd || 312 <= cd) {
                            de[t] = 0;
                            break
                        }
                        1 == Ga &&
                            (8 > bd ? (O[k(cd) * g + k(bd + 400)] <= E ? (M[t].x += 400, Z[t].x *= 0.8) : Z[t].x *= -0.8, bd = M[t].x + Z[t].x * fe) : 408 <= bd && (O[k(cd) * g + k(bd - 400)] <= E ? (M[t].x -= 400, Z[t].x *= 0.8) : Z[t].x *= -0.8, bd = M[t].x + Z[t].x * fe), 8 > cd ? (O[k(cd + 300) * g + k(bd)] <= E ? (M[t].y += 300, Z[t].y *= 0.8) : Z[t].y *= -0.8, cd = M[t].y + Z[t].y * fe) : 308 <= cd && (O[k(cd - 300) * g + k(bd)] <= E ? (M[t].y -= 300, Z[t].y *= 0.5) : Z[t].y *= -0.8, cd = M[t].y + Z[t].y * fe));
                        aa = k(cd) * g + k(bd);
                        Te = 0;
                        le(bc, 0, 0);
                        for (Ra = 0; 37 > Ra; Ra++) {
                            var cc = O[aa + cg[Ra]];
                            if (!(cc <= E)) {
                                G = cc;
                                if (0 <= cc && (G = H[cc], 1 == hg(t, G, cc))) continue;
                                bc.x -= ig[Ra];
                                bc.y -= jg[Ra];
                                Te++
                            }
                        }
                        0 == Te ? (M[t].x = bd, M[t].y = cd) : (lg(bc), Z[t].y -= rg, Gd = 0.999 * gg(Z[t]), vf(bc, -(bc.x * Z[t].x + bc.y * Z[t].y)), Z[t].add(bc), vf(Z[t], 0.999), vf(bc, 0.1), Z[t].add(bc), lg(Z[t]), vf(Z[t], Gd), M[t].x += Z[t].x * fe, M[t].y += Z[t].y * fe, Z[t].y += rg);
                        aa = k(M[t].y) * g + k(M[t].x);
                        Te = 0;
                        le(bc, 0, 0);
                        for (Ra = 0; 21 > Ra; Ra++)
                            if (cc = O[aa + cg[Ra]], !(cc <= E)) {
                                if (0 <= cc) {
                                    if (2 == Zf[H[cc]] && 2 == Zf[N[t]] && N[t] != H[cc]) continue;
                                    if (2 == Zf[H[cc]] && 2 != Zf[N[t]]) continue;
                                    if (5 == Zf[H[cc]] && 5 != Zf[N[t]]) continue;
                                    if (H[cc] == od && 2 == Zf[N[t]]) continue;
                                    if (H[cc] == D) continue;
                                    if (H[cc] == id && N[t] == id) continue
                                }
                                bc.x -= ig[Ra];
                                bc.y -= jg[Ra];
                                Te++
                            }
                        0 != Te && (lg(bc), M[t].add(bc))
                    }
                    if (4 > M[t].x || g - 4 <= M[t].x || 4 > M[t].y || 312 <= M[t].y) {
                        de[t] = 0;
                        break
                    }
                    var aa = k(M[t].y) * g + k(M[t].x),
                        te = 0;
                    N[t] == Kc && 0 <= G ? 2 == Zf[G] ? mg(t, aa, 0, Kc, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5) : 3 == Zf[G] && mg(t, aa, 0, D, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5) : N[t] == Lc ? G != Xc && G != id && G != pd || mg(t, aa, 0, Lc, 0, 0, 0, 0) : N[t] == Pc ? (Gd = gg(Re), (G == id || G == pd || (-1 == G || -3 == G || G == Wc || G == jd || G == kd) && 5 < Gd) && mg(t, aa, 0, 11, 0, Re.x, Re.y, Gd)) : 37 == N[t] ? G != id &&
                        G != pd || mg(t, aa, 0, 37, 0, 0, 0, 0) : N[t] == rd ? G != Xc && G != id && G != pd || mg(t, aa, 0, rd, 0, 0, 0, 0) : N[t] == D && (G != Lc && G != hd && 37 != G && G != pd || mg(t, aa, 0, D, 0, 0, 0, 0));
                    N[t] == Mc && 0 <= G && (G == pd ? mg(t, aa, 0, Mc, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5) : G != zd && 3 == Zf[G] && mg(t, aa, 0, D, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5));
                    if (6 == N[t] && 0 <= G) G == fd ? mg(t, aa, 0, fd, 0, 0, 0, 0) : G == pd ? mg(t, aa, 0, Kc, 0, 0, 0, 0) : G == id ? mg(t, aa, 0, Kc, 0, 0, 0, 1) : G != zd && (3 == Zf[G] && 1 == U[t] ? mg(t, aa, 0, 6, 1, 0, 0, 0) : 3 == Zf[G] && mg(t, aa, 0, D, 0, 0, 0, 0));
                    else if (N[t] == Nc && 0 <= G)
                        if (3 == Zf[G] && 0 == U[t]) {
                            for (Ra = 0; 37 >
                                Ra; Ra++)
                                if (cc = O[aa + cg[Ra]], cc <= E && (te = je(k(M[t].x) + qg[Ra], k(M[t].y) + tg[Ra], D), 0 < te)) {
                                    var Qf = W(20);
                                    I[te].x += Z[t].x * Qf + ig[Ra] * Qf / 2;
                                    I[te].y += Z[t].y * Qf + jg[Ra] * Qf / 2;
                                    J[te] = 2
                                }
                            de[t] = 0
                        } else G == pd && mg(t, aa, 0, Nc, 0, 0, 0, 0);
                    else if (N[t] == Uc && 0 <= G)
                        if (3 == Zf[G]) {
                            for (Ra = 9; 21 > Ra; Ra++) cc = O[aa + cg[Ra]], cc <= E && 50 > W(100) && je(k(M[t].x) + qg[Ra], k(M[t].y) + tg[Ra], D);
                            1 > W(100) && mg(t, aa, 0, Uc, 0, 0, 0, 0)
                        } else G == pd && mg(t, aa, 0, Uc, 0, 0, 0, 0);
                    else if (N[t] == hd) G != Xc && G != id && G != pd || mg(t, aa, 0, hd, 0, 0, 0, 0);
                    else if (N[t] == Oc && 0 < G) aa = (k(M[t].y) >>
                        2) * s + (k(M[t].x) >> 2), y[aa] += 10, Cc -= 10;
                    else if (N[t] == Sc)
                        if (0 == U[t] && 0 < G) U[t] = G;
                        else {
                            if (0 != U[t] && !(1E3 > ja[ia] - Nd)) {
                                var eb = k(M[t].x),
                                    Va = k(M[t].y);
                                if (1 == Zf[U[t]] || U[t] == Xc || U[t] == zd) Va += 4;
                                var qb = Va * g + eb;
                                O[qb] <= E && je(eb, Va, U[t])
                            }
                        } else if ((N[t] == Vc || N[t] == dd) && 0 <= G)
                        if (3 == Zf[G]) {
                            for (var yc = 10, zc = k(M[t].x) & 65532, Ac = k(M[t].y) & 65532, Rf = ug(zc - yc, u), Sf = ug(Ac - yc, u), Tf = vg(zc + yc, g - u - 1), Uf = vg(Ac + yc, (rc - 1) * u - 1), Va = Sf; Va <= Uf; Va++)
                                for (eb = Rf; eb <= Tf; eb++)(eb - zc) * (eb - zc) + (Va - Ac) * (Va - Ac) > yc * yc || (qb = Va * g + eb, 0 <= O[qb] && (I[O[qb]].x +=
                                    10 * (eb - zc), I[O[qb]].y += 10 * (Va - Ac)), O[qb] <= E && N[t] == dd && je(eb, Va, D), 0 == (Va & 3) + (eb & 3) && (qb = (Va >> 2) * s + (eb >> 2), 0 >= C[qb] && (1 <= We(eb - zc) && (v[qb].x += 100 / (eb - zc)), 1 <= We(Va - Ac) && (v[qb].y += 100 / (Va - Ac)))));
                            de[t] = 0
                        } else G == pd && mg(t, aa, 0, N[t], 0, 0, 0, 0);
                    else if (N[t] == gd && 0 <= G) 3 == Zf[G] ? (mg(t, aa, 0, N[t], 0, 0, 0, 1), 2 > U[t] && (U[t]++, de[t] = 1)) : G == pd && mg(t, aa, 0, N[t], 0, 0, 0, 0);
                    else if (N[t] == Qc && 0 <= G) 0 < Zf[G] && mg(t, aa, 0, G, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5);
                    else if (N[t] == kd && 0 <= G) {
                        if (G != kd && G != D && G != gd && G != od && 0 < Zf[G]) {
                            yc = 10;
                            zc = k(M[t].x);
                            Ac = k(M[t].y);
                            Rf = ug(zc - yc, u);
                            Sf = ug(Ac - yc, u);
                            Tf = vg(zc + yc, g - u - 1);
                            Uf = vg(Ac + yc, (rc - 1) * u - 1);
                            le(Zc, 0, 0);
                            for (Va = Sf; Va <= Uf; Va++)
                                for (eb = Rf; eb <= Tf; eb++)(eb - zc) * (eb - zc) + (Va - Ac) * (Va - Ac) > yc * yc || (qb = Va * g + eb, 0 <= O[qb] && (Zc.x += M[t].x - eb, Zc.y += M[t].y - Va));
                            Ze(Zc);
                            for (Va = Sf; Va <= Uf; Va++)
                                for (eb = Rf; eb <= Tf; eb++)(eb - zc) * (eb - zc) + (Va - Ac) * (Va - Ac) > yc * yc || (qb = Va * g + eb, 0 <= O[qb] && (J[O[qb]] = H[O[qb]], H[O[qb]] = kd, ke[O[qb]] = 0, I[O[qb]].x += 0.5 * Zc.x + 0.5 * (zc - eb), I[O[qb]].y += 0.5 * Zc.y + 0.5 * (Ac - Va)));
                            de[t] = 0
                        }
                    } else if (N[t] == vd && 0 <= G) 3 == Zf[G] ?
                        mg(t, aa, 0, D, 0, 0.5 * Z[t].x, 0.5 * Z[t].y, 0.5) : G == pd && mg(t, aa, 0, vd, 0, 0, 0, 0);
                    else if (N[t] == Wc) Gd = gg(Re), (-1 == G || G == jd || G == kd) && 7 < Gd ? N[t] = Kc : G == pd && mg(t, aa, 0, Wc, 0, 0, 0, 0);
                    else if (N[t] == jd) 37 == G ? mg(t, aa, 1, Kc, 0, 0, 0, 0) : G == id ? mg(t, aa, 2, jd, 0, 0, 0, 0) : G == od ? mg(t, aa, 1, jd, 0, 0, 0, 0) : G == pd && mg(t, aa, 0, jd, 0, 0, 0, 0);
                    else if (N[t] == sd) Gd = gg(Re), (-1 == G || -3 == G || G == Wc || G == jd || G == kd) && 5 < Gd ? mg(t, aa, 0, Wc, 0, 0, 0, 0.1 * Gd) : G == id ? mg(t, aa, 1, sd, 0, 0, 0, 0) : G == od ? mg(t, aa, 2, sd, 0, 0, 0, 0) : G == pd && mg(t, aa, 0, sd, 0, 0, 0, 0);
                    else if (N[t] == fd) G == Lc ? mg(t,
                        aa, 0, fd, 0, 0, 0, 0) : G == hd ? mg(t, aa, 0, fd, 0, 0, 0, 0) : 37 == G ? mg(t, aa, 0, fd, 0, 0, 0, 0) : G == id ? mg(t, aa, 0, D, 0, 0, 0, 0) : G == pd && mg(t, aa, 0, fd, 0, 0, 0, 0);
                    else if (N[t] == Ad && 0 <= G) 3 == Zf[G] ? U[t] == Uc ? mg(t, aa, 2, D, 0, 0, 0, 0) : U[t] == dd ? mg(t, aa, 0, dd, 0, 0, 0, 1) : U[t] == hd ? mg(t, aa, 0, Qc, 0, 0, 0, 1) : mg(t, aa, 0, zd, 0, 0, 0, 0) : G == Lc ? mg(t, aa, 0, Nc, 0, 0, 0, 0) : 37 == G ? mg(t, aa, 0, Nc, 0, 0, 0, 0) : G == pd && mg(t, aa, 0, Ad, 0, 0, 0, 0);
                    else if (N[t] == Bd) G == pd && mg(t, aa, 0, Bd, 0, 0, 0, 0);
                    else if (N[t] == Cd && 0 != U[t] && !(1E3 > ja[ia] - Nd) && (Zc.set(Z[t]), Ze(Zc), vf(Zc, 4), eb = k(M[t].x - Zc.x), Va =
                            k(M[t].y - Zc.y), qb = Va * g + eb, O[qb] <= E)) {
                        var dh = U[t] & 255,
                            eh = U[t] >> 8;
                        0 < eh && (je(eb, Va, dh), U[t] = eh - 1 << 8 | dh)
                    }
                    0 != fg && (N[t] = fg, U[t] = 0);
                    if (0 != de[t])
                        for (aa = k(M[t].y) * g + k(M[t].x), Ra = 0; 21 > Ra; Ra++) O[aa + cg[Ra]] <= E && (O[aa + cg[Ra]] = -2)
                }
    }
};

function $e(a, b) {
    var c, d, e, f, h;
    c = new Bc;
    var r = 0 == b ? da : ea,
        q = 0 == b ? Me : Oe;
    f = 0 == b ? Pe : Se;
    var w = 0 == b ? Ue : Ve;
    if (34 > r) {
        if (1 == Ha && (w = 0 == b ? Pe : Se), w && (q = Fc - Hc, w = Gc - Ic, !(1 >= ha && 1 == Ba && 1 >= pa && 0 == q && 0 == w && 3 != Ha))) {
            var z = ug(ug(We(q), We(w)), 1),
                q = k((q << 8) / z),
                w = k((w << 8) / z),
                A = (Hc << 8) + 127,
                P = (Ic << 8) + 127;
            for (d = 0; d <= z; d++, A += q, P += w) {
                var x = ha + 0,
                    Ea = (A >> 8) - x;
                f = (P >> 8) - x;
                var Qa = Ea + 2 * x,
                    Wa = f + 2 * x;
                8 > Ea && (Ea = 8);
                8 > f && (f = 8);
                Qa > g - 8 - 1 && (Qa = g - 8 - 1);
                307 < Wa && (Wa = 307);
                var La = f * g + Ea,
                    Sa = g - (Qa - Ea + 1);
                for (h = f; h <= Wa; h++, La += Sa)
                    for (f = Ea; f <= Qa; f++,
                        La++)
                        if (!(x * x + 1 < (f - (A >> 8)) * (f - (A >> 8)) + (h - (P >> 8)) * (h - (P >> 8))))
                            if (3 == Ha) {
                                e = 0 != Dd[r] ? Dd[r] : Kc;
                                var fa = 0;
                                e != Oc && (e == Tc ? fa = 0 != Hd[da] ? Hd[da] : 0 != Hd[ea] ? Hd[ea] : Kc : e == od && (fa = 8 * Pd(Jc) / Qd + 0.5, 8 <= fa && (fa = 0), fa = k(fa) + 1), 0 <= O[La] && H[O[La]] != e && Ee(a, La, H[O[La]], e, fa))
                            } else O[La] == Ld && (fa = Dd[r], (0 == b && Ve && 34 > ea || 1 == b && Ue && 34 > da) && 50 > W(100) && (fa = Dd[0 == b ? ea : da]), e = je(f, h, fa), 0 > e || (fa == Oc ? (bf(c, Jc, 0.1), I[e].set(c), O[La] = E) : fa == Tc ? J[e] = 0 != Hd[da] ? Hd[da] : 0 != Hd[ea] ? Hd[ea] : Kc : fa == od && (fa = 8 * Pd(Jc) / Qd + 0.5, 8 <= fa && (fa = 0), J[e] =
                                k(fa) + 1)))
            }
        }
    } else if (40 == r) e = (Gc >> 2) * s + (Fc >> 2), bf(c, Jc, 10), w && 0 == C[e] && (v[e].add(c), 10 < df(v[e]) && 1 == Ba && (Ze(v[e]), vf(v[e], 10)));
    else if (41 == r) e = (Gc >> 2) * s + (Fc >> 2), w && (x = (ha + 1) * (ha + 1) * 0.25, x = 0 == b ? x : -x, 0 == C[e] && (y[e] += x, Cc -= x), 0 == C[e - 1] && (y[e - 1] += x, Cc -= x), 0 == C[e - s] && (y[e - s] += x, Cc -= x), 0 == C[e - s - 1] && (y[e - s - 1] += x, Cc -= x));
    else if (43 == r) {
        if (!(pe > ue - 5))
            if (f = Fc >> 2 << 2, h = Gc >> 2 << 2, e = (Gc >> 2) * s + (Fc >> 2), 0 != C[e]) ve++;
            else if (q && ve++, w) {
            r = 0;
            for (q = pe - 1; 0 <= q && xf[q] == ve; q--) r++;
            5 > r && (ve++, wg(f + k(W(u)), h + k(W(u))), wg(f +
                k(W(u)), h + k(W(u))), wg(f + k(W(u)), h + k(W(u))), wg(f + k(W(u)), h + k(W(u))));
            wg(f + k(W(u)), h + k(W(u)))
        }
    } else if (44 == r) {
        if (q) {
            f = Fe(Fc, 24, 391);
            h = Fe(Gc, 24, 291);
            for (c = r = 0; c < Sd; c++)
                if (f == Ud[c] && h == Td[c]) {
                    r = 1;
                    break
                }
            0 == r && ge(f, h)
        }
    } else if (45 == r || 46 == r || 47 == r || 49 == r) f = Fc >> 2 << 2, h = Gc >> 2 << 2, e = (Gc >> 2) * s + (Fc >> 2), 0 == C[e] && (q && 46 == r ? he(f, h, 0, 0) : q && 47 == r ? he(f, h, 22, ha) : q && 45 == r ? (c = 0 != Id[da] ? Id[da] : 0 != Id[ea] ? Id[ea] : 0, he(f, h, 30, c)) : q && 49 == r && he(f, h, 22, 10));
    else if (48 == r) e = (Gc >> 2) * s + (Fc >> 2), 0 == C[e] && q && 48 == r && (c = 0 != Jd[da] ? Jd[da] :
        0 != Jd[ea] ? Jd[ea] : Kc, ie(Fc, Gc, c));
    else if (54 == r) lb = Fc, mb = Gc - 14, q && (za = 20);
    else if (50 == r || 51 == r || 52 == r) {
        if (1 == Ha && (w = 0 == b ? Pe : Se), w) {
            q = k(Fc / u) - k(Hc / u);
            w = k(Gc / u) - k(Ic / u);
            z = ug(ug(We(q), We(w)), 1);
            q = k((q << 8) / z);
            w = k((w << 8) / z);
            A = (k(Hc / u) << 8) - 127;
            P = (k(Ic / u) << 8) - 127;
            for (c = 0; c <= z; c++, A += q, P += w)
                for (d = (A >> 8) - k(ha / 2), x = (P >> 8) - k(ha / 2), Ea = d + ha / 2 + 0.5, Qa = x + ha / 2 + 0.5, h = x; h <= x + ha; h++)
                    for (f = d; f <= d + ha; f++)(f - Ea) * (f - Ea) + (h - Qa) * (h - Qa) > ha * ha / 4 || (e = Fe(h, 2, rc - 3) * s + Fe(f, 2, s - 3), 50 == r ? (C[e] = 1, le(v[e], 0, 0), Cc += y[e], y[e] = 0) : 51 == r ?
                        C[e] = -2 : 52 == r && 0 == C[e] && (C[e] = -2, le(v[e], 0, 0), Cc += y[e], y[e] = 0));
            if (52 == r && 0 == ha)
                for (q = Fc - Hc, w = Gc - Ic, z = ug(ug(We(q), We(w)), 1), q = k((q << 8) / z), w = k((w << 8) / z), A = (Hc << 8) + 127, P = (Ic << 8) + 127, c = 0; c <= z; c++, A += q, P += w)
                    for (e = 0; e < Nd; e++) A >> 8 == k(F[e].x) && P >> 8 == k(F[e].y) && V(e--);
            if (50 == r || 52 == r)
                for (c = 0; c < Nd; c++) e = (k(F[c].y) >> 2) * s + (k(F[c].x) >> 2), 0 != C[e] && V(c--);
            if (51 == r)
                for (c = 0; c < Sd; c++)
                    if (e = (k(Td[c]) >> 2) * s + (k(Ud[c]) >> 2), -2 == C[e] && (f = c--, 0 != Sd)) {
                        w = q = h = void 0;
                        h = (Td[f] - 16) * g + (Ud[f] - 16);
                        for (w = 0; 32 > w; w++, h += g - 32)
                            for (q = 0; 32 >
                                q; q++, h++) - 3 == O[h] && (O[h] = Ld);
                        Ud[f] = Ud[Sd - 1];
                        Td[f] = Td[Sd - 1];
                        cf[f] = cf[Sd - 1];
                        of[f] = of[Sd - 1];
                        Sd--
                    }
            if (50 == r || 51 == r) {
                for (c = 0; c < Vd; c++)
                    if (K[c] == Xd || K[c] == Xd + 1 || K[c] == $d || K[c] == ae)
                        for (d = 4; 6 > d; d++) {
                            if (e = (k(L[c * Wd + d].y) >> 2) * s + (k(L[c * Wd + d].x) >> 2), 0 != C[e]) {
                                $f(c--);
                                break
                            }
                        } else if (K[c] == Yd)
                            for (d = 0; 4 > d; d++)
                                if (e = (k(L[c * Wd + d].y) >> 2) * s + (k(L[c * Wd + d].x) >> 2), 0 != C[e]) {
                                    $f(c--);
                                    break
                                }
                for (c = 0; c < ce; c++)
                    if (0 != de[c] && (e = (k(M[c].y) >> 2) * s + (k(M[c].x) >> 2), 0 != C[e])) {
                        e = k(M[c].y) * g + k(M[c].x);
                        for (d = 0; 21 > d; d++) - 2 == O[e + cg[d]] && (O[e +
                            cg[d]] = Ld);
                        de[c] = 0
                    }
            }
            if (51 == r || 52 == r)
                for (c = 0; c < sc; c++) - 2 == C[c] && (C[c] = 0);
            e = 8 * g + 8;
            for (h = 8; 308 > h; h++, e += 16)
                for (f = 8; 408 > f; f++, e++) La = (h >> 2) * s + (f >> 2), 0 == C[La] && -1 == O[e] ? O[e] = Ld : 1 == C[La] && -1 > O[e] && (O[e] = -1)
        }
    } else if (53 == r)
        if (q)
            if (0 == sa) ta = va = Fc, ua = wa = Gc;
            else {
                if (!(1 == Ba && 1 >= pa && ta == va && ua == wa))
                    for (ta > va && (f = ta, ta = va, va = f), ua > wa && (h = ua, ua = wa, wa = h), w = Fc - k((va - ta) / 2) - ta, z = Gc - k((wa - ua) / 2) - ua, h = ua - 8; h <= wa - 8; h++)
                        if (!(0 > h + z || 300 <= h + z))
                            for (f = ta - 8; f <= va - 8; f++) 0 > f + w || 400 <= f + w || (q = 400 * h + f, 0 != xa[q] && O[(z + h + 8) * g + (w +
                                f + 8)] == Ld && (r = je(w + f + 8, z + h + 8, xa[q]), 0 <= r && (xa[q] == Oc ? (I[r].x = 0.1 * Math.cos(ya[q] * Qb / 32), I[r].y = 0.1 * -Math.sin(ya[q] * Qb / 32), O[(z + h + 8) * g + (w + f + 8)] = E) : xa[q] == Tc && (J[r] = ya[q]))))
            } else if (f && 0 == sa) {
        for (r = 0; 12E4 > r; r++) xa[r] = 0, ya[r] = 0;
        for (r = 0; r < Nd; r++) f = k(F[r].x), h = k(F[r].y), 8 > f || 408 <= f || 8 > h || 308 <= h || (f -= 8, h -= 8, f = 400 * h + f, xa[f] = H[r], H[r] == Oc ? ya[f] = Od(k(64 * Pd(I[r]) / Qd), 63) : H[r] == Tc && (ya[f] = J[r] % 100))
    } else w && 0 == sa && (va = Fc, wa = Gc);
    else 57 == r && 0 != pa && w && (qa -= (Ge - xg) / (1 << pa), ra -= (He - yg) / (1 << pa), qa = Fe(qa, 0, 400 - (400 >>
        pa)), ra = Fe(ra, 0, 300 - [300, 150, 75, 38, 19][pa]))
}
Md.prototype.a = function() {
    var a, b, c, d, e, f, h, r, q;
    e = new Bc;
    if (0 == na)
        for (a = 308 * g; 0 <= a; a--) l[a] = -1 == O[a] ? 4284506208 : 4278190080;
    else if (1 == na || 2 == na) {
        a = 2 * s + 2;
        for (d = 2; 77 > d; d++, a += 4)
            for (c = 2; 102 > c; c++, a++) 1 == C[a] ? nc(Dc[a], Ec[a], u, u, 4284506208) : (r = h = 0, 0 < y[a] && (h = k(vg(48 * y[a], 96))), 0 > y[a] && (r = k(vg(48 * -y[a], 96))), nc(Dc[a], Ec[a], u, u, 4278190080 | h << 8 | r));
        if (2 == na) {
            var w;
            for (a = 0; a < sc; a++) 0 == C[a] && (e.set(v[a]), w = Ze(e), 0.2 > w || (b = Dc[a] + 2, q = Ec[a] + 2, 8 < w && (w = 8), f = k(vg(48 * w, 96)), zg(b + e.x * w * 10, q + e.y * w * 10, b, q, 4278190080 |
                f << 16)))
        }
    } else if (3 == na)
        for (a = 308 * g; 3328 <= a; a--) - 1 == O[a] ? l[a] = 4284506208 : (f = 230 * (l[a] >> 16 & 255) >> 8, h = 230 * (l[a] >> 8 & 255) >> 8, r = 230 * (l[a] & 255) >> 8, l[a] = 4278190080 | f << 16 | h << 8 | r);
    else if (4 == na) {
        for (d = 8; 308 > d; d++) {
            e = d * g + 8;
            for (c = 8; 407 > c; c++, e++) f = (l[e] >> 16 & 255) + (l[e + 1] >> 16 & 255) >> 1, h = (l[e] >> 8 & 255) + (l[e + 1] >> 8 & 255) >> 1, r = (l[e] & 255) + (l[e + 1] & 255) >> 1, l[e] = 4278190080 | f << 16 | h << 8 | r;
            e = d * g + 407;
            for (c = 407; 8 < c; c--, e--) f = (l[e] >> 16 & 255) + (l[e - 1] >> 16 & 255) >> 1, h = (l[e] >> 8 & 255) + (l[e - 1] >> 8 & 255) >> 1, r = (l[e] & 255) + (l[e - 1] & 255) >> 1, l[e] =
                4278190080 | f << 16 | h << 8 | r
        }
        for (c = 8; 408 > c; c++) {
            e = 8 * g + c;
            for (d = 8; 307 > d; d++, e += g) f = (l[e] >> 16 & 255) + (l[e + g] >> 16 & 255) >> 1, h = (l[e] >> 8 & 255) + (l[e + g] >> 8 & 255) >> 1, r = (l[e] & 255) + (l[e + g] & 255) >> 1, l[e] = 4278190080 | f << 16 | h << 8 | r;
            e = 307 * g + c;
            for (d = 307; 8 < d; d--, e -= g) f = (l[e] >> 16 & 255) + (l[e - g] >> 16 & 255) >> 1, h = (l[e] >> 8 & 255) + (l[e - g] >> 8 & 255) >> 1, r = (l[e] & 255) + (l[e - g] & 255) >> 1, l[e] = 4278190080 | f << 16 | h << 8 | r
        }
        for (a = 308 * g; 0 <= a; a--) - 1 == O[a] && (l[a] = 4284506208)
    } else if (5 == na) {
        c = 309 * g;
        for (a = 0; a < c; a++) db[a] = fb[a] = gb[a] = 0;
        f = [1, 1, 1, g - 3, 1, 1, 1, g - 3, 1, 1,
            1, g - 3, 1, 1, 1, g - 3
        ];
        var z;
        e = 2 * s + 2;
        for (d = 2; d < rc - 2; d++, e += 4)
            for (c = 2; c < s - 2; c++, e++)
                if (h = We(v[e].x), a = We(v[e].y), 0 != h || 0 != a)
                    for (r = 1 / (h + a), h = k(h * r * 65535), r = k(a * r * 65535), q = b = 0, 0 > v[e].x ? b = -1 : 0 < v[e].x && (b = 1), 0 > v[e].y ? q = -g : 0 < v[e].y && (q = g), w = (d << 2) * g + (c << 2), a = 0; 16 > a; a++) z = l[w] >> 16 & 255, db[w + b] += z * h, db[w + q] += z * r, z = l[w] >> 8 & 255, fb[w + b] += z * h, fb[w + q] += z * r, z = l[w] & 255, gb[w + b] += z * h, gb[w + q] += z * r, w += f[a];
        e = 8 * g + 8;
        for (d = 8; 308 > d; d++, e += 16)
            for (c = 8; 408 > c; c++, e++) l[e] = -1 == O[e] ? 4284506208 : 4278190080 | vg(db[e] >> 16, 255) << 16 | vg(fb[e] >>
                16, 255) << 8 | vg(gb[e] >> 16, 255)
    } else if (6 == na)
        for (a = 308 * g; 3328 <= a; a--) - 1 == O[a] ? l[a] = 4284506208 : (f = 220 * (l[a] >> 16 & 255) >> 8, h = 220 * (l[a] >> 8 & 255) >> 8, r = 220 * (l[a] & 255) >> 8, l[a] = 4278190080 | f << 16 | h << 8 | r);
    else if (7 == na) {
        for (a = 308 * g; 2912 <= a; a--) - 1 == O[a] ? l[a] = 4284506208 : -2 == O[a] ? l[a] = 4278190080 : O[a] == E ? l[a] = 4286611711 : O[a] == Ld ? l[a] = 0 <= O[a + 1] ? lc[H[O[a + 1]]][0] : 0 <= O[a - 1] ? lc[H[O[a - 1]]][0] : 0 <= O[a + g] ? lc[H[O[a + g]]][0] : 0 <= O[a - g] ? lc[H[O[a - g]]][0] : 0 <= O[a + g + 1] ? lc[H[O[a + g + 1]]][0] : 0 <= O[a + g - 1] ? lc[H[O[a + g - 1]]][0] : 0 <= O[a - g + 1] ? lc[H[O[a -
            g + 1]]][0] : 0 <= O[a - g - 1] ? lc[H[O[a - g - 1]]][0] : 4278190080 : 0 <= O[a] && (l[a] = lc[H[O[a]]][0]);
        for (a = 308 * g; 3328 <= a; a--) 4278190080 == l[a] >>> 0 && (4278190080 != l[a + 1] >>> 0 && 4293848814 != l[a + 1] >>> 0 ? l[a] = 4293848814 : 4278190080 != l[a - 1] >>> 0 && 4293848814 != l[a - 1] >>> 0 ? l[a] = 4293848814 : 4278190080 != l[a + g] >>> 0 && 4293848814 != l[a + g] >>> 0 ? l[a] = 4293848814 : 4278190080 != l[a - g] >>> 0 && 4293848814 != l[a - g] >>> 0 && (l[a] = 4293848814))
    } else if (8 == na) {
        for (a = 308 * g; 0 <= a; a--) l[a] = -1 == O[a] ? 4284506208 : 4278190080;
        a = 2 * s + 2;
        for (d = 2; 77 > d; d++, a += 4)
            for (c = 2; 102 > c; c++,
                a++) 0 == C[a] && (e.set(v[a]), w = df(e), 0.2 > w || (2 < w && (w = 2), h = k(vg(48 * w, 96)), f = 0, 0 < y[a] && (f = k(vg(48 * y[a] * w, 96))), r = 0, 0 > y[a] && (r = k(vg(48 * -y[a] * w, 96))), b = Dc[a] + 5 * v[a].x, q = Ec[a] + 5 * v[a].y, w = Dc[a + 1] + 5 * v[a + 1].x, z = Ec[a + 1] + 5 * v[a + 1].y, zg(b, q, w, z, 4278190080 | f << 16 | h << 8 | r), w = Dc[a + s] + 5 * v[a + s].x, z = Ec[a + s] + 5 * v[a + s].y, zg(b, q, w, z, 4278190080 | f << 16 | h << 8 | r)))
    } else if (9 == na)
        for (a = 2 * s + 2, d = 2; 77 > d; d++, a += 4)
            for (c = 2; 102 > c; c++, a++) 1 == C[a] ? nc(Dc[a], Ec[a], u, u, 4284506208) : (f = 0, 0 < y[a] && (f = k(vg(48 * y[a], 72))), 0 > y[a] && (f = k(vg(48 * -y[a], 24))),
                nc(Dc[a], Ec[a], u, u, 4278190080 | f << 16 | f << 8 | f));
    else if (10 == na)
        for (w = [0, 1, 2, 3, g + 0, g + 1, g + 2, g + 3, 2 * g + 0, 2 * g + 1, 2 * g + 2, 2 * g + 3, 3 * g + 0, 3 * g + 1, 3 * g + 2, 3 * g + 3], a = 2 * s + 2, d = 2; 77 > d; d++, a += 4)
            for (c = 2; 102 > c; c++, a++)
                if (1 == C[a]) nc(Dc[a], Ec[a], u, u, 4284506208);
                else {
                    if (q = 256 - k(vg(We(12 * y[a]), 32)), 256 != q)
                        for (e = (d << 2) * g + (c << 2), b = 0; 16 > b; b++) f = (l[e + w[b]] >> 16 & 255) * q >> 8, h = (l[e + w[b]] >> 8 & 255) * q >> 8, r = (l[e + w[b]] & 255) * q >> 8, l[e + w[b]] = 4278190080 | f << 16 | h << 8 | r
                } else if (11 == na) {
        for (a = 308 * g; 0 <= a; a--) db[a] = 0 > O[a] ? k(8 * db[a] / 9) : H[O[a]] == D ? 25500 : H[O[a]] ==
            Xc ? 25500 : H[O[a]] == fd ? 255E3 : H[O[a]] == id ? 255E3 : H[O[a]] == od ? 25500 : H[O[a]] == zd ? 25500 : k(8 * db[a] / 9);
        for (a = 308 * g; 0 <= a; a--) l[a] = -1 == O[a] ? 4284506208 : 4278190080
    } else if (12 == na) {
        for (a = 0; a < Nd; a++) db[R[a]] = Kd[H[a]];
        for (d = 8; 308 > d; d++) {
            e = d * g + 8;
            for (c = 8; 407 > c; c++, e++) db[e] = db[e + 1] = k((db[e] + db[e + 1]) / 2);
            for (c = 407; 8 < c; c--, e--) db[e] = db[e - 1] = k((db[e] + db[e - 1]) / 2)
        }
        for (c = 8; 408 > c; c++) {
            e = 8 * g + c;
            for (d = 8; 307 > d; d++, e += g) db[e] = db[e + g] = k((db[e] + db[e + g]) / 2);
            for (d = 307; 8 < d; d--, e -= g) db[e] = db[e - g] = k((db[e] + db[e - g]) / 2)
        }
        for (a = 308 * g; 0 <=
            a; a--) c = db[a], 0 > c ? (f = 128 * -c >> 10, 255 < f && (f = 255), h = 0, r = 255 * -c >> 10, 255 < r && (r = 255)) : 1024 > c ? (h = f = 0, r = 255 * c >> 10) : 2048 > c ? (f = 0, h = 255 * (c - 1024) >> 10, r = 255) : 3072 > c ? (f = 0, h = 255, r = 255 - (255 * (c - 2048) >> 10)) : 4096 > c ? (f = 255 * (c - 3072) >> 10, h = 255, r = 0) : 6144 > c ? (f = 255, h = 255 - (255 * (c - 4096) >> 11), r = 0) : (f = 255, h = 255 * (c - 6144) >> 11, 255 < h && (h = 255), r = 255 * (c - 6144) >> 11, 255 < r && (r = 255)), l[a] = 4278190080 | f << 16 | h << 8 | r;
        for (a = 308 * g; 0 <= a; a--) - 1 == O[a] && (l[a] = 4284506208)
    } else if (13 == na)
        for (a = 308 * g; 3328 <= a; a--) - 1 == O[a] ? l[a] = 4278190080 : O[a] == Ld && (f =
            255 - (255 - (l[a] >> 16 & 255) >> 1), h = 255 - (255 - (l[a] >> 8 & 255) >> 1), r = 255 - (255 - (l[a] & 255) >> 1), l[a] = 4278190080 | f << 16 | h << 8 | r);
    if (1 < Aa) {
        f = [0, 0, 100, 50, 25, 16, 8, 4];
        for (a = 0; 400 > a; a += f[Aa])
            for (d = 0, e = 8 * g + a + 8; 300 > d; d++, e += g) 4284506208 != l[e] && (l[e] = 4282400832);
        for (a = 0; 300 > a; a += f[Aa])
            for (c = 0, e = (a + 8) * g + 8; 400 > c; c++, e++) 4284506208 != l[e] && (l[e] = 4282400832)
    }
    if (0 < Aa) {
        d = 0;
        for (e = 8 * g + 208; 300 > d; d++, e += g) 4284506208 != l[e] && (l[e] = 4282384384);
        c = 0;
        for (e = 158 * g + 8; 400 > c; c++, e++) 4284506208 != l[e] && (l[e] = 4282384384)
    }
    if (6 == na)
        for (c = 0; c < Nd; c++) d =
            ((lc[H[c]][ke[c]] & 16711680) >> 18) + (l[R[c]] >> 16 & 255), 255 < d && (d = 255), a = ((lc[H[c]][ke[c]] & 65280) >> 10) + (l[R[c]] >> 8 & 255), 255 < a && (a = 255), e = ((lc[H[c]][ke[c]] & 255) >> 2) + (l[R[c]] & 255), 255 < e && (e = 255), l[R[c]] = 4278190080 | d << 16 | a << 8 | e;
    else if (7 != na)
        if (9 == na)
            for (c = 0; c < Nd; c++) l[R[c]] = mc[H[c]];
        else if (13 == na)
        for (c = 0; c < Nd; c++) d = (l[R[c]] >> 16 & 255) - (255 - (lc[H[c]][ke[c]] >> 16 & 255) + 10), 0 > d && (d = 0), a = (l[R[c]] >> 8 & 255) - (255 - (lc[H[c]][ke[c]] >> 8 & 255) + 10), 0 > a && (a = 0), e = (l[R[c]] & 255) - (255 - (lc[H[c]][ke[c]] & 255) + 10), 0 > e && (e = 0), l[R[c]] =
            4278190080 | d << 16 | a << 8 | e;
    else
        for (c = 0; c < Nd; c++) l[R[c]] = lc[H[c]][ke[c]];
    h = 4289765520;
    13 == na && (h = 4278190080);
    for (c = 0; c < Sd; c++)
        for (d = (Td[c] - 16) * g + (Ud[c] - 16), a = 32 * k(cf[c]) * ac.c, f = 0; 32 > f; f++, d += g - 32)
            for (e = 0; 32 > e; e++, d++, a++) 4278190080 == ac.b[a] && (l[d] = h);
    d = [4294959328, 4294963424, 4294967264, 4292935648, 4292935679, 4292931839, 4292927743, 4294959359];
    13 == na && (d = [4278190080, 4278190080, 4278190080, 4278190080, 4278190080, 4278190080, 4278190080, 4278190080]);
    for (c = a = 0; c < pe - 1; c++) {
        e = c;
        for (f = xf[c]; c < pe - 1 && f == xf[c + 1]; c++) zg(uf[c],
            tf[c], uf[c + 1], tf[c + 1], d[a]), a++, a &= 7;
        zg(uf[c], tf[c], uf[e], tf[e], d[a]);
        a++;
        a &= 7
    }
    a = 4294959278;
    e = 4294967295;
    13 == na && (e = a = 4278190080);
    for (c = 0; c < Vd; c++) {
        d = c * Wd;
        switch (K[c]) {
            case Xd:
            case Xd + 1:
            case Xd + 2:
                zg(L[d + 0].x, L[d + 0].y, L[d + 1].x, L[d + 1].y, a);
                zg(L[d + 1].x, L[d + 1].y, L[d + 2].x, L[d + 2].y, e);
                zg(L[d + 1].x, L[d + 1].y, L[d + 3].x, L[d + 3].y, e);
                zg(L[d + 2].x, L[d + 2].y, L[d + 4].x, L[d + 4].y, e);
                zg(L[d + 3].x, L[d + 3].y, L[d + 5].x, L[d + 5].y, e);
                nc(k(L[d + 0].x) - 1, k(L[d + 0].y) - 1, 3, 3, a);
                break;
            case Xd + 3:
                zg(L[d + 1].x, L[d + 1].y, L[d + 2].x, L[d + 2].y, e);
                if (145 < Ae[c]) break;
                zg(L[d + 3].x, L[d + 3].y, L[d + 5].x, L[d + 5].y, e);
                if (140 < Ae[c]) break;
                zg(L[d + 4].x, L[d + 4].y, L[d + 7].x, L[d + 7].y, e);
                if (135 < Ae[c]) break;
                zg(L[d + 6].x, L[d + 6].y, L[d + 9].x, L[d + 9].y, e);
                if (130 < Ae[c]) break;
                zg(L[d + 8].x, L[d + 8].y, L[d + 10].x, L[d + 10].y, e);
                if (125 < Ae[c]) break;
                nc(k(L[d + 0].x) - 1, k(L[d + 0].y) - 1, 2, 2, a);
                break;
            case Yd:
            case Yd + 1:
                zg(L[d + 0].x, L[d + 0].y, L[d + 1].x, L[d + 1].y, a);
                zg(L[d + 1].x, L[d + 1].y, L[d + 2].x, L[d + 2].y, a);
                zg(L[d + 2].x, L[d + 2].y, L[d + 3].x, L[d + 3].y, a);
                zg(L[d + 3].x, L[d + 3].y, L[d + 0].x, L[d + 0].y, a);
                break;
            case Yd + 2:
            case Yd + 3:
                zg(L[d + 0].x, L[d + 0].y, L[d + 1].x, L[d + 1].y, a);
                if (145 < Ae[c]) break;
                zg(L[d + 2].x, L[d + 2].y, L[d + 3].x, L[d + 3].y, a);
                if (140 < Ae[c]) break;
                zg(L[d + 4].x, L[d + 4].y, L[d + 5].x, L[d + 5].y, a);
                if (135 < Ae[c]) break;
                zg(L[d + 6].x, L[d + 6].y, L[d + 7].x, L[d + 7].y, a);
                if (130 < Ae[c]) break;
                break;
            case $d:
            case $d + 2:
            case $d + 3:
                if (K[c] != $d + 3) zg(L[d + 1].x, L[d + 1].y, L[d + 2].x, L[d + 2].y, e), zg(L[d + 1].x, L[d + 1].y, L[d + 3].x, L[d + 3].y, e), zg(L[d + 2].x, L[d + 2].y, L[d + 4].x, L[d + 4].y, e), zg(L[d + 3].x, L[d + 3].y, L[d + 5].x, L[d + 5].y, e), f = -2, b = 2, h = -1, q = 3;
                else {
                    zg(L[d +
                        3].x, L[d + 3].y, L[d + 5].x, L[d + 5].y, e);
                    if (140 < Ae[c]) break;
                    zg(L[d + 4].x, L[d + 4].y, L[d + 7].x, L[d + 7].y, e);
                    if (135 < Ae[c]) break;
                    zg(L[d + 6].x, L[d + 6].y, L[d + 9].x, L[d + 9].y, e);
                    if (130 < Ae[c]) break;
                    zg(L[d + 8].x, L[d + 8].y, L[d + 10].x, L[d + 10].y, e);
                    if (125 < Ae[c]) break;
                    f = -1;
                    b = 1;
                    h = -1;
                    q = 1
                }
                r = 0 == lc[Zd[c]][0] ? a : lc[Zd[c]][0];
                13 == na && (r = 4278190080);
                for (w = h; w <= q; w++)
                    for (z = f; z <= b; z++)
                        if (!(f + 1 <= z && z <= b - 1 && h + 1 <= w && w <= q - 1)) {
                            var A = k(L[d].x) + z,
                                P = k(L[d].y) + w;
                            8 > A || 408 <= A || 8 > P || 308 <= P || 1 == Ce[c] && z == f && w == h || 1 == Ce[c] && z == b && w == h || 1 == Ce[c] && z == f &&
                                w == q || 1 == Ce[c] && z == b && w == q || (A = P * g + A, l[A] = l[A] == r ? 4278190080 : r)
                        }
                if (11 == na)
                    for (f = k(Fe(L[d + 0].x, 8, 407)), h = k(Fe(L[d + 0].y, 8, 304)), w = h - 4; w <= h + 4; w += 4)
                        for (z = f - 4; z <= f + 4; z += 4) db[w * g + z] = 536870911;
                break;
            case ae:
                r = 4287655952, 13 == na && (r = 4278190080), ze[d] == Xd ? (zg(L[d].x, L[d].y, L[d].x, L[d].y + 3, r), zg(L[d].x, L[d].y, L[d].x + 3, L[d].y, r), zg(L[d].x, L[d].y + 2, L[d].x + 2, L[d].y + 2, r)) : ze[d] == Yd ? Ag(k(L[d].x), k(L[d].y), 3, 3, r) : ze[d] == $d ? (zg(L[d].x, L[d].y, L[d].x, L[d].y + 3, r), zg(L[d].x, L[d].y, L[d].x + 2, L[d].y, r), zg(L[d].x, L[d].y + 2,
                    L[d].x + 2, L[d].y + 2, r), zg(L[d].x + 3, L[d].y, L[d].x + 3, L[d].y + 2, r)) : -2 == ze[d] ? (zg(L[d].x + 1, L[d].y, L[d].x + 2, L[d].y, r), zg(L[d].x, L[d].y + 1, L[d].x, L[d].y + 2, r), zg(L[d].x + 3, L[d].y + 1, L[d].x + 3, L[d].y + 2, r), zg(L[d].x + 1, L[d].y + 3, L[d].x + 2, L[d].y + 3, r)) : nc(k(L[d].x), k(L[d].y), 4, 4, r)
        }
        switch (K[c]) {
            case Xd:
            case Xd + 1:
            case Xd + 2:
            case Xd + 3:
            case $d:
            case $d + 2:
            case $d + 3:
                if (12 == na)
                    for (r = 0; 6 > r; r++) f = k(Fe(L[d + r].x, 8, 407)), h = k(Fe(L[d + r].y, 8, 304)), db[h * g + f] = 3E3
        }
    }
    for (c = 0; c < ce; c++)
        if (0 != de[c]) {
            a = k(M[c].y) * g + k(M[c].x);
            e = lc[N[c]][0];
            13 ==
                na && (e = 4278190080);
            for (d = 9; 21 > d; d++) l[a + cg[d]] = e;
            if (308 > M[c].y)
                if (11 == na) {
                    if (N[c] == D || N[c] == Xc || N[c] == fd || N[c] == id || N[c] == od || N[c] == zd) db[a] = 255E3
                } else 12 == na && (db[a] = 2 * Kd[N[c]])
        }
    if (11 == na) {
        for (d = 8; 308 > d; d++) {
            e = d * g + 8;
            for (c = 8; 407 > c; c++, e++) db[e] = db[e] + db[e + 1] >> 1;
            for (c = 407; 8 < c; c--, e--) db[e] = db[e] + db[e - 1] >> 1
        }
        for (c = 8; 408 > c; c++) {
            e = 8 * g + c;
            for (d = 8; 307 > d; d++, e += g) db[e] = db[e] + db[e + g] >> 1;
            for (d = 307; 8 < d; d--, e -= g) db[e] = db[e] + db[e - g] >> 1
        }
        for (a = 308 * g; 0 <= a; a--) 1 > db[a] ? l[a] = 4278190080 : (q = vg(db[a], 255), f = (l[a] >> 16 & 255) *
            q >> 8, h = (l[a] >> 8 & 255) * q >> 8, r = (l[a] & 255) * q >> 8, l[a] = 4278190080 | f << 16 | h << 8 | r)
    }
    a = new Bc;
    if (!ga && 0 == za) {
        if (50 == da || 51 == da || 52 == da || 50 == ea || 51 == ea || 52 == ea)
            for (d = (Ic >> 2) - 1 - k(ha / 2), e = [
                    [],
                    [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,
                        2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
                    ],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1,
                        1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
                    ],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
                        4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4
                    ],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4]
                ], f = ha, c = ((Hc >> 2) - 1 - k(ha / 2) + [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4][f]) * u, d = (d + [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][f]) * u, h = 0; h < e[f].length; h++) r = Fe(d, 0, 308) *
                g + Fe(c, 0, g - 1), l[r] = 4290772992, 1 == e[f][h] && c++, 2 == e[f][h] && d++, 3 == e[f][h] && c--, 4 == e[f][h] && d--;
        if (5 == da || 5 == ea || 40 == da || 40 == ea || 23 == da || 23 == ea) bf(a, Jc, 30), zg(Fc + a.x, Gc + a.y, Fc, Gc, 4294901760);
        if (53 == da || 53 == ea)
            if (0 == sa) {
                if (53 == da && Ue || 53 == ea && Ve) zg(ta, ua, va, ua, 4294951104), zg(ta, wa, va, wa, 4294951104), zg(ta, ua, ta, wa, 4294951104), zg(va, ua, va, wa, 4294951104)
            } else c = Fc - k((va - ta) / 2), d = Gc - k((wa - ua) / 2), a = va - ta, e = wa - ua, zg(c, d, c + a, d, 4290822399), zg(c, d + e, c + a, d + e, 4290822399), zg(c, d, c, d + e, 4290822399), zg(c + a, d, c + a, d +
                e, 4290822399);
        if (54 == da || 54 == ea) zg(lb, mb, lb, mb + 13, 4290772992), zg(lb, mb, lb + 200, mb, 4290772992), zg(lb, mb + 13, lb + 200, mb + 13, 4290772992);
        1 == Ha && (Ue && (34 > da || 50 == da || 51 == da || 52 == da) || Ve && (34 > ea || 50 == ea || 51 == ea || 52 == ea)) && zg(Ja, Ka, Fc, Gc, 4294901760)
    }
};
for (var Nd = 0, me = 4E4, F = Array(me), I = Array(me), H = new Int32Array(me), J = new Int32Array(me), ke = new Uint32Array(me), O = new Int32Array(316 * g), R = new Int32Array(me), ne = new Int32Array(me), Nd = 0; Nd < me; Nd++) F[Nd] = new Bc;
for (Nd = 0; Nd < me; Nd++) I[Nd] = new Bc;
var Bg = [1, -1, g, -g, g + 1, g - 1, -g + 1, -g - 1],
    Cg = [1, 1, 0, -1, -1, -1, 0, 1],
    Dg = [0, -1, -1, -1, 0, 1, 1, 1],
    Eg = [1, -g + 1, -g, -g - 1, -1, g - 1, g, g + 1];

function je(a, b, c) {
    if (Nd >= ja[ia] || 7 > a || 409 <= a || 7 > b || 309 <= b) return -1;
    le(F[Nd], a, b);
    le(I[Nd], 0, 0);
    H[Nd] = c;
    J[Nd] = 0;
    ke[Nd] = 0;
    ne[Nd] = 0;
    R[Nd] = ~~b * g + ~~a;
    O[R[Nd]] = Nd;
    Nd++;
    return Nd - 1
}

function V(a) {
    0 != Nd && (O[R[a]] = Ld, Nd--, Nd != a && (F[a].set(F[Nd]), I[a].set(I[Nd]), H[a] = H[Nd], J[a] = J[Nd], ke[a] = ke[Nd], ne[a] = ne[Nd], R[a] = R[Nd], O[R[a]] = H[a] == Oc ? E : a))
}

function Fg(a, b, c, d) {
    var e;
    e = F[a].x;
    F[a].x = F[b].x;
    F[b].x = e;
    e = F[a].y;
    F[a].y = F[b].y;
    F[b].y = e;
    e = O[c];
    O[c] = O[d];
    O[d] = e;
    e = R[a];
    R[a] = R[b];
    R[b] = e
}

function Gg(a, b) {
    vf(b, 3.8 / (df(b) + 1));
    var c = (F[a].y >> 0) * g + (F[a].x + b.x >> 0);
    O[c] <= E && (F[a].x += b.x);
    c = (F[a].y + b.y >> 0) * g + (F[a].x >> 0);
    O[c] <= E && (F[a].y += b.y);
    R[a] = (F[a].y >> 0) * g + (F[a].x >> 0);
    O[R[a]] = a;
    return R[a]
}
var Hg = [0, 0, 0.2, 0, 0, 0.2, 0.7, 0.2, 0, 0, 0.8, 0.2, 0.2, 0, 0.2, 0.5, 0, 0.5, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 0, 0, 0.9, 0, 0.9, 0, 0, 0, 0.8, 0.2, 0, 0.9, 0.1, 0, 0.9, 0.9, 0.5, 0, 0.9],
    Ig = [0, 0, 0.2, 0, 0, 0.2, 0.7, 0.2, 0, 0, 1, 0.2, 0.2, 0, 0.2, 0.5, 0, 0.5, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 1, 0, 0.9, 0, 0.9, 0, 0, 0, 0.2, 0.2, 0, 0.5, 0.1, 0, 0.9, 0.9, 0.5, 0, 0.9],
    Jg = [0, 0, 5, 40, 10, 5, 10, 10, 0, 0, 40, 10, 30, 10, 0, 10, 30, 100, 0, 20, 50, 10, 0, 100, 5, 10, 5, 30, 0, 10, 0, 10, 0, 5, 0, 10, 5, 40, 0, 10, 0, 20, 5, 50, 5, 0],
    Zf = [0, 0, 1, 2, 3, 1, 4, 1, 0, 0, 4, 1, 0, 1, 4, 1, 2, 4, 0, 1, 3, 1, 0, 2, 1, 3, 5, 2, 3, 4, 0, 1, 0, 3, 2, 4, 1, 2, 4, 5, 0, 2, 3,
        4, 5, 4
    ];

function jf(a, b) {
    var c, d, e;
    d = (F[a].y >> 2) * s + (F[a].x >> 2);
    e = R[a];
    H[a] != Oc && (O[e] = Ld);
    b.set(v[d]);
    if (H[a] == Kc) b.y += Y(0.01, 0.1), b.add(I[a]), vf(I[a], 0.7), Gg(a, b);
    else if (H[a] == Lc) {
        I[a].x += 0.2 * v[d].x;
        I[a].y += 0.2 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.01, 0.05);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        d = $(8);
        var f;
        f = 5 > d ? e - g : 6 > d ? e - 1 : 7 > d ? e + 1 : e + g;
        var h = O[f];
        if (0 <= h)
            if (7 > d && (1 == Zf[H[h]] && H[h] != Wc || H[h] == dd || H[h] == hd || 37 == H[h])) 10 > W(100) &&
                Fg(a, h, e, f);
            else if (H[h] == Pc) 50 > W(100) && (H[a] = Pc);
        else if (H[h] == Cd && 0 == ke[h]) return J[h] = 4 | (5 > d ? 2 : 6 > d ? 1 : 7 > d ? 3 : 0), ke[h] = Lc, V(a), 1
    } else if (H[a] == D) {
        2 == J[a] && (vf(I[a], 0.8), b.add(I[a]));
        vf(b, 0.2);
        if (0 == J[a] || 2 == J[a]) {
            var r = Y(-0.01, -0.05);
            v[d].x += Y(-0.02, 0.02);
            v[d].y += r;
            y[d] += -r;
            Cc -= -r
        } else 1 == J[a] && (r = Y(-0.01, -0.05), y[d] += -r, Cc -= -r);
        e = Gg(a, b);
        e += $(5) - 2;
        e += ($(5) - 2) * g;
        h = O[e - g];
        if (0 <= h)
            if (H[h] == Kc) H[h] = D;
            else {
                if (H[h] == Lc || 37 == H[h]) return V(a), 1;
                H[h] == Mc ? 50 > W(100) && (H[h] = D) : 11 == H[h] ? H[h] = Lc : H[h] == ed ? H[h] =
                    D : H[h] == qd && (H[h] = D)
            }
        d = 5;
        1 == J[a] && (d = 20);
        if (W(100) < d) return V(a), 1
    } else if (H[a] == Mc) {
        0 == J[a] ? (b.y += Y(0.01, 0.09), b.add(I[a]), vf(I[a], 0.8)) : le(b, 0, 0);
        e = Gg(a, b);
        if (0 == J[a] && (h = O[e + g], 0 > h || H[h] != Kc && 6 != H[h] && H[h] != qd || 1E3 > ja[ia] - Nd)) return 0;
        J[a] = 1;
        d = ~~F[a].x + $(3) - 1;
        r = ~~F[a].y - $(1.5);
        f = r * g + d;
        if (O[f] <= E && (O[f + g] <= E && (e = d, f = r, O[R[a]] = Ld, le(F[a], e, f), R[a] = ~~f * g + ~~e, O[R[a]] = a, je(d, r + 1, 6)), 5 > W(100))) return V(a), 1
    } else if (6 == H[a])
        if (b.set(I[a]), vf(I[a], 0.3), e = Gg(a, b), 0 == J[a]) {
            if (e += $(5) - 2, e += ($(7) - 3) * g, h = O[e],
                0 <= h)
                if (H[h] == D || H[h] == Xc) 50 > W(100) && (J[a] = 1);
                else if (H[h] == Lc) {
                if (1E3 > ja[ia] - Nd) return 0;
                d = ~~F[a].x + $(3) - 1;
                r = ~~F[a].y + $(3) - 1;
                e = r * g + d;
                O[e] <= E && 10 > W(100) && je(d, r, Mc)
            }
        } else 1 == J[a] && (d = ~~F[a].x + $(3) - 1, r = ~~F[a].y + $(3) - 1, e = r * g + d, h = O[e], O[e] <= E ? 30 > W(100) && (e = je(d, r, D), 0 <= e && (J[e] = 1)) : 0 <= h && H[h] == Lc && (J[a] = 0, H[a] = Kc), 5 > W(1E3) && (H[a] = Kc));
    else if (H[a] == Nc) {
        b.y += Y(0.01, 0.2);
        b.add(I[a]);
        vf(I[a], 0.8);
        e = Gg(a, b);
        e += $(5) - 2;
        e += ($(5) - 2) * g;
        h = O[e];
        if (0 > h || 3 != Zf[H[h]]) return 0;
        c = 10;
        var q = F[a].x & 65524,
            w = F[a].y & 65524,
            z = ug(q - c, u);
        d = ug(w - c, u);
        for (var A = vg(q + c, g - u - 1), P = vg(w + c, (rc - 1) * u - 1), r = d; r <= P; r++)
            for (d = z; d <= A; d++) e = (d - q) * (d - q) + (r - w) * (r - w), e > c * c || (e = r * g + d, h = O[e], 0 <= h && H[h] != Nc && (I[h].x += 10 * (d - q), I[h].y += 10 * (r - w)), 0 == (r & 3) + (d & 3) && (e = (r >> 2) * s + (d >> 2), 0 >= C[e] && (1 <= We(d - q) && (v[e].x += 10 / (d - q)), 1 <= We(r - w) && (v[e].y += 10 / (r - w)))));
        H[a] = D
    } else if (H[a] == Oc) v[d].add(I[a]), O[e] == Ld && (O[e] = E);
    else if (H[a] == Pc) 1 < df(b) && 50 > W(100) && (H[a] = 11), le(b, 0, 0), e = Gg(a, b), e += $(9) - 4, e += ($(9) - 4) * g, h = O[e], 0 <= h && 3 == Zf[H[h]] && (H[a] = Lc);
    else if (11 ==
        H[a]) b.y += Y(0.01, 0.08), b.add(I[a]), vf(I[a], 0.7), e = Gg(a, b), e += $(3) - 1, e += ($(3) - 1) * g, h = O[e], 0 <= h && 6 != H[h] && 9 != H[h] && 11 != H[h] && H[h] != Sc && H[h] != qd && H[h] != Bd && (H[a] = H[h] == Pc ? Pc : Lc);
    else if (H[a] == Qc) {
        if (b.add(I[a]), vf(I[a], 0.7), Gg(a, b), 10 > W(100)) return V(a), 1
    } else if (H[a] == Rc) vf(b, 0.05), I[a].add(b), I[a].y += 0.01, vf(I[a], 0.999), b.set(I[a]), vf(b, 3.8 / (df(b) + 1)), f = ~~F[a].y * g + ~~(F[a].x + b.x), O[f] <= E ? F[a].x += b.x : -1 >= O[f] ? (I[a].x *= -0.9, I[a].y *= 0.9) : 0 <= O[f] && (2 == Zf[H[O[f]]] && H[O[f]] != yd ? (I[O[f]].x -= I[a].x, I[a].x *=
        0.5, d = F[a].x, F[a].x = F[O[f]].x, F[O[f]].x = d, R[O[f]] = e, O[e] = O[f]) : H[O[f]] == D ? (d = F[a].x, F[a].x = F[O[f]].x, F[O[f]].x = d, R[O[f]] = e, O[e] = O[f]) : H[O[f]] == Rc ? (d = 0.9 * I[a].x, I[a].x = 0.9 * I[O[f]].x, I[O[f]].x = d) : (I[a].x *= -Hg[H[O[f]]], I[a].y *= Ig[H[O[f]]])), e = ~~F[a].y * g + ~~F[a].x, O[e] = Ld, f = ~~(F[a].y + b.y) * g + ~~F[a].x, O[f] <= E ? F[a].y += b.y : -1 >= O[f] ? (I[a].y *= -0.9, I[a].x *= 0.9) : 0 <= O[f] && (2 == Zf[H[O[f]]] && H[O[f]] != yd ? (I[O[f]].y -= I[a].y, I[a].y *= 0.5, r = F[a].y, F[a].y = F[O[f]].y, F[O[f]].y = r, R[O[f]] = e, O[e] = O[f]) : H[O[f]] == D ? (r = F[a].y,
        F[a].y = F[O[f]].y, F[O[f]].y = r, R[O[f]] = e, O[e] = O[f]) : H[O[f]] == Rc ? 0 < I[a].y ? (d = 0.45 * I[a].y, I[a].y *= -0.45, I[a].y += I[O[f]].y, I[O[f]].y = d) : (d = 0.45 * I[O[f]].y, I[O[f]].y *= -0.45, I[O[f]].y += I[a].y, I[a].y = d) : (I[a].y *= -Hg[H[O[f]]], I[a].x *= Ig[H[O[f]]])), R[a] = ~~F[a].y * g + ~~F[a].x, O[R[a]] = a;
    else if (H[a] == Sc)
        if (le(b, 0, 0), e = Gg(a, b), 0 == J[a]) e += $(5) - 1, e += ($(5) - 1) * g, h = O[e], 0 <= h && (J[a] = H[h] == Sc ? J[h] : H[h]);
        else {
            if (1E3 > ja[ia] - Nd) return 0;
            d = ~~F[a].x + $(3) - 1;
            r = ~~F[a].y + $(3) - 1;
            e = r * g + d;
            O[e] <= E && 10 > W(100) && je(d, r, J[a])
        } else if (H[a] ==
        Tc)
        if (I[a].x += 0.1 * v[d].x, I[a].y += 0.1 * v[d].y, b.y += Y(0.1, 0.2), vf(I[a], 0.9), b.add(I[a]), e = Gg(a, b), 0 == J[a]) J[a] = 0 != Hd[da] ? Hd[da] : 0 != Hd[ea] ? Hd[ea] : Kc;
        else if (100 > J[a]) e += $(3) - 1, e += ($(3) - 1) * g, 0 <= O[e] && 3 == Zf[H[O[e]]] && (I[a].y -= 0.1, Ze(I[a]), vf(I[a], 50), J[a] += 100);
    else {
        if (5E3 > J[a]) return J[a] += 100, 0;
        if (5 < W(100)) return 0;
        if (1E3 > ja[ia] - Nd) return V(a), 1;
        for (c = 0; 512 > c; c += 32) d = ~~(F[a].x + 2 * Pb[c][0]), r = ~~(F[a].y + 2 * Pb[c][1]), d = Fe(d, 8, 408), r = Fe(r, 8, 308), e = r * g + d, O[e] <= E && (e = je(d, r, J[a] % 100), 0 <= e && (I[e].x += 20 * Pb[c][0],
            I[e].y += 20 * Pb[c][1]));
        V(a);
        return 1
    } else if (H[a] == Uc) {
        I[a].x += 0.2 * v[d].x;
        I[a].y += 0.2 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.01, 0.05);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        d = $(8);
        f = 5 > d ? e - g : 6 > d ? e - 1 : 7 > d ? e + 1 : e + g;
        h = O[f];
        if (0 <= h)
            if (7 > d && (1 == Zf[H[h]] && H[h] != Wc || H[h] == Lc || H[h] == dd || 37 == H[h])) 10 > W(100) && Fg(a, h, e, f);
            else if (3 == Zf[H[h]]) J[a] = 1;
        else {
            if (H[h] == Ad && 256 > J[h]) return J[h] = Uc, V(a), 1;
            if (H[h] == Cd && 0 == ke[h]) return J[h] = 4 | (5 >
                d ? 2 : 6 > d ? 1 : 7 > d ? 3 : 0), ke[h] = Uc, V(a), 1
        }
        if (1 == J[a] && (d = ~~F[a].x + $(3) - 1, r = ~~F[a].y + $(3) - 1, f = r * g + d, O[f] <= E && je(d, r, D), 10 > W(100))) return V(a), 1
    } else if (H[a] == Vc)
        if (le(b, 0, 0), e = Gg(a, b), 0 == J[a]) e += $(3) - 1, e += ($(3) - 1) * g, h = O[e], 0 <= h && 3 == Zf[H[h]] && (J[a] = 1);
        else {
            for (c = 0; 8 > c; c++) f = e + Bg[c], h = O[f], 0 <= h && H[h] == Vc && (J[h] = 1);
            c = 10;
            q = F[a].x & 65524;
            w = F[a].y & 65524;
            z = ug(q - c, u);
            d = ug(w - c, u);
            A = vg(q + c, g - u - 1);
            P = vg(w + c, (rc - 1) * u - 1);
            for (r = d; r <= P; r++)
                for (d = z; d <= A; d++) e = (d - q) * (d - q) + (r - w) * (r - w), e > c * c || (f = r * g + d, h = O[f], 0 <= h && (I[h].x += 10 *
                    (d - q), I[h].y += 10 * (r - w)), 0 == (r & 3) + (d & 3) && (f = (r >> 2) * s + (d >> 2), 0 >= C[f] && (1 <= We(d - q) && (v[f].x += 1 / (d - q)), 1 <= We(r - w) && (v[f].y += 1 / (r - w)))));
            V(a);
            return 1
        }
    return 0
}

function kf(a, b) {
    var c, d, e, f;
    d = (F[a].y >> 2) * s + (F[a].x >> 2);
    e = R[a];
    O[e] = Ld;
    b.set(v[d]);
    if (H[a] == Wc) {
        I[a].x += 0.05 * v[d].x;
        I[a].y += 0.05 * v[d].y;
        I[a].y += Y(0.01, 0.05);
        vf(I[a], 0.95);
        b.set(I[a]);
        10 < df(b) && 50 > W(100) && (H[a] = Kc);
        vf(b, 3.8 / (df(b) + 1));
        f = ~~F[a].y * g + ~~(F[a].x + b.x);
        if (O[f] <= E) F[a].x += b.x;
        else {
            if (0 <= O[f])
                if (2 == Zf[H[O[f]]] && H[O[f]] != yd || H[O[f]] == Xc) {
                    I[O[f]].x -= I[a].x;
                    var h = F[a].x;
                    F[a].x = F[O[f]].x;
                    F[O[f]].x = h;
                    R[O[f]] = e;
                    O[e] = O[f]
                } else if (H[O[f]] == Kc || H[O[f]] == Mc || H[O[f]] == Nc || H[O[f]] == Tc || H[O[f]] == ed) I[O[f]].x +=
                W(I[a].x);
            I[a].x *= 0.5
        }
        e = ~~F[a].y * g + ~~F[a].x;
        O[e] = Ld;
        f = ~~(F[a].y + b.y) * g + ~~F[a].x;
        if (O[f] <= E) F[a].y += b.y;
        else {
            if (0 <= O[f])
                if (2 == Zf[H[O[f]]] && H[O[f]] != yd || H[O[f]] == Xc) {
                    I[O[f]].y -= I[a].y;
                    var r = F[a].y;
                    F[a].y = F[O[f]].y;
                    F[O[f]].y = r;
                    R[O[f]] = e;
                    O[e] = O[f]
                } else if (H[O[f]] == Kc || H[O[f]] == Mc || H[O[f]] == Nc || H[O[f]] == Tc || H[O[f]] == ed) I[O[f]].y += W(I[a].y);
            I[a].y *= 0.5
        }
        R[a] = ~~F[a].y * g + ~~F[a].x;
        O[R[a]] = a
    } else if (H[a] == Xc) {
        I[a].x += 0.1 * v[d].x;
        I[a].y += 0.1 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0, 0.1)), O[e + 1] == Ld && (I[a].x +=
            Y(0, 0.1)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.01, 0.1);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        e += $(5) - 2;
        e += ($(5) - 2) * g;
        var q = O[e - g];
        if (0 <= q)
            if (H[q] == Kc) H[q] = D;
            else if (H[q] == Lc || H[q] == hd) {
            if (H[a] = Wc, H[q] = Qc, 50 > W(100)) return V(a), 1
        } else if (H[q] == Mc) H[q] = D;
        else if (H[q] == Rc) H[q] = D;
        else if (H[q] == Wc) I[q].x += Y(-0.1, 0.1), 5 > W(100) && (H[q] = Xc);
        else if (H[q] == ed) H[q] = D;
        else if (H[q] == qd) H[q] = D;
        else if (37 == H[q]) {
            if (H[a] = Wc, H[q] = rd, 50 > W(100)) return V(a), 1
        } else H[q] == sd ? 50 > W(100) && (H[q] = Xc) : H[q] == yd && 1 > W(100) && (H[q] = Xc);
        h = $(4);
        f = 1 > h ? e - g : 2 > h ? e - 1 : 3 > h ? e + 1 : e + g;
        q = O[f];
        if (0 <= q && H[q] == Cd && 0 == ke[q]) return J[q] = 4 | (1 > h ? 2 : 2 > h ? 1 : 3 > h ? 3 : 0), ke[q] = Xc, V(a), 1
    } else if (H[a] == $c) b.y += Y(0, 0.1), b.add(I[a]), vf(I[a], 0.7), e = Gg(a, b), 0 == J[a] ? (f = e + ($(3) - 1), f += ($(3) - 1) * g, 0 <= O[f] && H[O[f]] != $c && (J[a] = H[O[f]])) : 2048 >= J[a] ? (f = e + ($(3) - 1), f += ($(3) - 1) * g, e != f && 0 <= O[f] && (H[O[f]] != $c || 0 == J[O[f]]) && (H[O[f]] = $c, J[O[f]] = J[a] & 255, ke[O[f]] = 0), J[a] += 256) : (J[a] += 256, 32768 <= J[a] && (H[a] = J[a] & 255, J[a] = 0, le(I[a], 0, 0)));
    else if (H[a] == dd) {
        I[a].x += 0.2 * v[d].x;
        I[a].y +=
            0.2 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.01, 0.05);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        h = $(8);
        f = 5 > h ? e - g : 6 > h ? e - 1 : 7 > h ? e + 1 : e + g;
        q = O[f];
        if (0 <= q)
            if (7 > h && 1 == Zf[H[q]] && H[q] != Wc) 10 > W(100) && Fg(a, q, e, f);
            else {
                if (H[q] == Ad && 256 > J[q]) return J[q] = dd, V(a), 1;
                if (H[q] == Cd && 0 == ke[q]) return J[q] = 4 | (5 > h ? 2 : 6 > h ? 1 : 7 > h ? 3 : 0), ke[q] = dd, V(a), 1
            }
        if (10 > df(I[a]) && (f = e + ($(5) - 2), f += ($(5) - 2) * g, 0 > O[f] || 3 != Zf[H[O[f]]])) return 0;
        e = 10;
        c = F[a].x & 65532;
        for (var w =
                F[a].y & 65532, z = ug(c - e, u), q = ug(w - e, u), A = vg(c + e, g - u - 1), P = vg(w + e, (rc - 1) * u - 1), r = q; r <= P; r++)
            for (h = z; h <= A; h++) f = (h - c) * (h - c) + (r - w) * (r - w), f > e * e || (f = r * g + h, 0 <= O[f] && (I[O[f]].x += 10 * (h - F[a].x), I[O[f]].y += 10 * (r - F[a].y)), 0 == (r & 3) + (h & 3) && (f = (r >> 2) * s + (h >> 2), 0 >= C[f] && (1 <= We(h - c) && (v[f].x += 10 / (h - c)), 1 <= We(r - w) && (v[f].y += 10 / (r - w)))));
        H[a] = D
    } else if (H[a] == ed) {
        q = O[e + g];
        0 == J[a] && 0 <= q && (6 == H[q] || H[q] == Pc || H[q] == Vc || H[q] == jd || H[q] == qd || H[q] == sd || H[q] == Ad || H[q] == Cd) && (J[a] = H[q] << 2);
        0 == J[a] ? (b.y += Y(0.01, 0.2), q != Ld && (O[e - 1] ==
            Ld && (I[a].x -= Y(0, 0.1)), O[e + 1] == Ld && (I[a].x += Y(0, 0.1)))) : le(b, 0, 0);
        b.add(I[a]);
        vf(I[a], 0.85);
        e = Gg(a, b);
        if (0 == J[a] || 1E3 > ja[ia] - Nd) return 0;
        h = J[a] & 3;
        f = e + [1, g, -1, -g][h];
        q = O[f];
        if (q <= E) J[a] = J[a] & 4294967292 | h + 1 & 3, f = je(f % g, ~~(f / g), ed), 0 < f && (J[f] = J[a]), H[a] = J[a] >> 2, J[a] = 0;
        else {
            if (0 <= q) return H[q] == J[a] >> 2 && (J[a] = J[a] & 4294967292 | h - 1 & 3), H[q] = H[a], J[q] = J[a], ke[q] = 0, V(a), 1;
            J[a] = J[a] & 4294967292 | h + 1 & 3
        }
    } else if (H[a] == fd) {
        if (le(b, 0, 0), e = Gg(a, b), e += $(5) - 2, e += ($(5) - 2) * g, q = O[e], 0 <= q)
            if (H[q] == Kc) H[q] = D;
            else {
                if (H[q] ==
                    Lc || H[q] == hd || 37 == H[q]) return V(a), 1;
                H[q] == Mc ? H[q] = D : 6 == H[q] ? H[q] = fd : 11 == H[q] ? H[q] = Lc : H[q] == Rc ? H[q] = D : H[q] == ed ? H[q] = D : H[q] == qd && (H[q] = D)
            }
    } else if (H[a] == gd) {
        b.y += Y(0, -0.02);
        b.add(I[a]);
        vf(I[a], 0.9);
        e = Gg(a, b);
        h = $(4);
        f = 1 > h ? e - g : 2 > h ? e - 1 : 3 > h ? e + 1 : e + g;
        q = O[f];
        if (0 <= q)
            if (3 > h && (1 == Zf[H[q]] || 2 == Zf[H[q]])) Fg(a, q, e, f);
            else if (H[q] == gd) I[a].x += Y(-0.2, 0.2), I[a].y += Y(-0.2, 0.2);
        else if (H[q] == Cd && 0 == ke[q]) return J[q] = 4 | (1 > h ? 2 : 2 > h ? 1 : 3 > h ? 3 : 0), ke[q] = gd, V(a), 1;
        if (0 == J[a]) {
            if (f = e + ($(5) - 2), f += ($(5) - 2) * g, 0 > O[f] || 3 != Zf[H[O[f]]]) return 0
        } else if (2 >
            J[a]) return J[a]++, 0;
        e = 10;
        c = ~~F[a].x;
        w = ~~F[a].y;
        z = ug(c - e, u);
        q = ug(w - e, u);
        A = vg(c + e, g - u - 1);
        P = vg(w + e, (rc - 1) * u - 1);
        for (r = q; r <= P; r++)
            for (h = z; h <= A; h++) f = (h - c) * (h - c) + (r - w) * (r - w), f > e * e || (f = r * g + h, q = O[f], 0 <= q && H[q] == gd && (J[q] = 1), q <= E && 1 > W(100) && je(h, r, D));
        y[d] += 2;
        Cc -= 2;
        H[a] = D;
        J[a] = 0
    } else if (H[a] == hd) {
        if (1 == J[a]) return V(a), 1;
        I[a].x += 0.3 * v[d].x;
        I[a].y += 0.3 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.01, 0.05);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        h = $(8);
        f = 5 > h ? e - g : 6 > h ? e - 1 : 7 > h ? e + 1 : e + g;
        q = O[f];
        if (0 <= q)
            if (7 > h && (1 == Zf[H[q]] && H[q] != Wc || H[q] == dd || 37 == H[q])) 10 > W(100) && Fg(a, q, e, f);
            else if (H[q] == Pc) 50 > W(100) && (H[a] = Pc);
        else if (H[q] == Uc) H[q] = hd, J[q] = 1, J[a] = 1;
        else {
            if (H[q] == Ad && 256 > J[q]) return J[q] = hd, V(a), 1;
            if (H[q] == Cd && 0 == ke[q]) return J[q] = 4 | (5 > h ? 2 : 6 > h ? 1 : 7 > h ? 3 : 0), ke[q] = hd, V(a), 1
        }
        if (2 < df(I[a])) {
            f = 0;
            e = 4;
            c = ~~F[a].x;
            w = ~~F[a].y;
            z = ug(c - e, u);
            q = ug(w - e, u);
            A = vg(c + e, g - u - 1);
            P = vg(w + e, (rc - 1) * u - 1);
            for (r = q; r <= P; r++)
                for (h = z; h <= A; h++) e * e < (h - c) * (h - c) + (r - w) * (r -
                    w) || (q = O[r * g + h], 0 <= q && H[q] == hd && 0 == J[q] && (J[q] = 1, f++));
            f = vg(ug(5, f), ue - pe);
            if (5 > f) return 0;
            h = (k(Fe(F[a].x, 8, 407)) >> 2 << 2) + 2;
            r = (k(Fe(F[a].y, 8, 307)) >> 2 << 2) + 2;
            ve++;
            for (c = 0; c < f; c++) wg(h + 1.9 * Pb[~~(512 * c / f)][0], r + 1.9 * Pb[~~(512 * c / f)][1]);
            ve++;
            V(a);
            return 1
        }
    } else if (H[a] == id)
        if (O[e] = a, le(I[a], 0, 0), 4096 > J[a])
            if (0 == J[a] && (J[a] = d % 1E3), d = J[a] >> 10, q = J[a] & 1023, q = 73 * q % 955 + 44, 0 == d ? (f = q % 3, 0 == f ? (h = -1, r = 0, d = 1) : 1 == f ? (h = 1, r = 0, d = 3) : (h = 0, r = 1, d = 0)) : 1 == d ? 0 >= q % 2 ? (h = -1, r = 0, d = 1) : (h = 0, r = 1, d = 0) : 0 >= q % 2 ? (h = 1, r = 0, d = 3) : (h = 0, r = 1, d =
                    0), f = ~~(F[a].y + r) * g + ~~(F[a].x + h), c = d << 10 | q, q = O[f], q <= E) O[e] = Ld, F[a].x += h, F[a].y += r, O[f] = a, J[a] = c, R[a] = f;
            else if (0 <= q) {
        if (H[q] != id || J[q] != c) {
            if (H[q] == id) return V(a), 1;
            if (H[q] == jd || H[q] == yd) return H[q] == jd ? J[q] = 6E3 + d : H[q] == yd && (J[q] = 6100 + d), H[q] = id, V(a), 1;
            if (1 == Zf[H[q]] || 2 == Zf[H[q]] || H[q] == Xc || 6 == H[q] || H[q] == Pc || H[q] == qd || H[q] == sd) J[a] = 5E3;
            else if (H[q] == Bd) Fg(a, q, e, f);
            else return V(a), 1
        }
    } else {
        if (E < q) return V(a), 1
    } else {
        if (5E3 == J[a]) {
            e = 6;
            c = ~~F[a].x;
            w = ~~F[a].y;
            z = ug(c - e, u);
            q = ug(w - e, u);
            A = vg(c + e, g - u - 1);
            P =
                vg(w + e, (rc - 1) * u - 1);
            for (r = q; r <= P; r++)
                for (h = z; h <= A; h++) f = (h - c) * (h - c) + (r - w) * (r - w), f > e * e || (f = r * g + h, q = O[f], 0 <= q && H[q] != id && (H[q] == Pc ? H[q] = 11 : H[q] == Tc && 0 < J[q] && 5E3 > J[q] && (J[q] += 100), I[q].x -= 3 * (h - F[a].x), I[q].y -= 3 * (r - F[a].y)));
            V(a);
            return 1
        }
        if (7E3 <= J[a]) {
            if (7E3 == J[a])
                for (h = [g, -1, -g, 1], c = 0; 4 > c; c++) q = O[e + h[c]], 0 <= q && H[q] == sd && (H[q] = id, J[q] = 7E3);
            J[a]++;
            7020 < J[a] && (H[a] = sd, J[a] = 0)
        } else if (6E3 <= J[a]) {
            d = J[a] & 3;
            w = 6E3 == (J[a] & 65532) ? jd : yd;
            h = [g, -1, -g, 1];
            for (c = 0; 4 > c; c++)
                if (2 != c && (f = e + h[d + c & 3], q = O[f], 0 <= q))
                    if (H[q] ==
                        jd || H[q] == yd) {
                        Fg(a, q, e, f);
                        H[q] == jd ? J[a] = 6E3 + (d + c & 3) : H[q] == yd && (J[a] = 6100 + (d + c & 3));
                        H[q] = w;
                        J[q] = 0;
                        break
                    } else if (H[q] == id && 6E3 <= J[q] && 7E3 > J[q]) {
                H[a] = w;
                J[a] = 0;
                break
            } else H[q] == sd && (H[q] = id, J[q] = 7E3);
            4 == c && (O[e + h[d]] <= E && (h = ~~F[a].x, r = ~~F[a].y, 0 == d ? je(h, r + 1, id) : 1 == d ? je(h - 1, r, id) : 2 == d ? je(h, r - 1, id) : 3 == d && je(h + 1, r, id)), H[a] = w, J[a] = 0)
        }
    } else H[a] == jd && (O[e] = a, le(I[a], 0, 0), e += $(5) - 2, e += ($(5) - 2) * g, q = O[e], 0 <= q && (H[q] == Lc ? 2 > W(100) && (H[a] = Kc) : H[q] == Xc && 2 > W(100) && (H[a] = Xc)));
    return 0
}

function mf(a, b) {
    var c, d, e, f;
    d = (F[a].y >> 2) * s + (F[a].x >> 2);
    e = R[a];
    O[e] = Ld;
    b.set(v[d]);
    if (H[a] == kd) {
        I[a].y += 0.03;
        vf(I[a], 0.92);
        b.add(I[a]);
        e = Gg(a, b);
        if (0 != J[a]) {
            if (J[a] == kd) return V(a), 1;
            if (5 < W(100)) return 0;
            if (J[a] == Pc) H[a] = 11, J[a] = 0;
            else if (6 == J[a] || J[a] == Wc || J[a] == qd) H[a] = Kc, J[a] = 0;
            else if (J[a] == dd || J[a] == fd) H[a] = D, J[a] = 1;
            else if (J[a] == hd) H[a] = Qc, J[a] = 0;
            else if (J[a] == jd) H[a] = jd, J[a] = 0;
            else if (J[a] == sd) H[a] = Wc, J[a] = 0;
            else if (J[a] == Cd) H[a] = zd, J[a] = 0;
            else return V(a), 1;
            return 0
        }
        f = e + ($(3) - 1);
        f += ($(3) -
            1) * g;
        d = O[f];
        if (0 > d || H[d] == kd || H[d] == Sc) return 0;
        e = 4;
        c = ~~F[a].x;
        var h = ~~F[a].y,
            r = ug(c - e, u),
            q = ug(h - e, u),
            w = vg(c + e, g - u - 1),
            z = vg(h + e, (rc - 1) * u - 1);
        le(b, 0, 0);
        for (var A = q; A <= z; A++)
            for (var P = r; P <= w; P++) {
                var x = (P - c) * (P - c) + (A - h) * (A - h);
                x > e * e || (f = A * g + P, d = O[f], 0 <= d && H[d] != kd && (b.x += F[a].x - P, b.y += F[a].y - A))
            }
        Ze(b);
        for (A = q; A <= z; A++)
            for (P = r; P <= w; P++)
                if (x = (P - c) * (P - c) + (A - h) * (A - h), !(x > e * e) && (f = A * g + P, d = O[f], 0 <= d && H[d] != Sc && (I[d].x += b.x + 1 * (F[a].x - P), I[d].y += b.y + 1 * (F[a].y - A), H[d] != kd || 0 == J[d]))) ke[d] = 0, J[d] = H[d], H[d] = kd;
        V(a);
        return 1
    }
    if (H[a] == od) {
        O[e] = a;
        le(I[a], 0, 0);
        x = J[a] & 15;
        A = J[a] >> 4 & 15;
        P = J[a] >> 8;
        A++;
        if (1 == A) return J[a] = P << 8 | A << 4 | x, 0;
        if (12 < A) return P == sd ? (H[a] = sd, J[a] = 0) : V(a), 1;
        if (8 < A) return J[a] = P << 8 | A << 4 | x, 0;
        if (0 == x)
            if (z = O[e + Eg[0]], 0 <= z && H[z] == od && (z = -1), d = O[e + Eg[1]], 0 <= d && H[d] == od && (d = -1), f = O[e + Eg[2]], 0 <= f && H[f] == od && (f = -1), c = O[e + Eg[3]], 0 <= c && H[c] == od && (c = -1), h = O[e + Eg[4]], 0 <= h && H[h] == od && (h = -1), r = O[e + Eg[5]], 0 <= r && H[r] == od && (r = -1), q = O[e + Eg[6]], 0 <= q && H[q] == od && (q = -1), w = O[e + Eg[7]], 0 <= w && H[w] == od && (w = -1), 0 <= c && 0 <= h &&
                0 <= r) x = 1;
            else if (0 <= r && 0 <= q && 0 <= w) x = 3;
        else if (0 <= w && 0 <= z && 0 <= d) x = 5;
        else if (0 <= d && 0 <= f && 0 <= c) x = 7;
        else if (0 <= r) x = 2;
        else if (0 <= w) x = 4;
        else if (0 <= d) x = 6;
        else if (0 <= c) x = 8;
        else return J[a] = 160 | x, 0;
        x -= 1;
        d = O[e + Eg[x]];
        if (0 <= d)
            if (H[d] == od)
                for (c = 2; 4 >= c; c++)
                    if (d = O[e + Eg[x] * c], 0 <= d) {
                        if (H[d] != od) break
                    } else {
                        if (d <= E) {
                            if (1E3 > ja[ia] - Nd) break;
                            f = je(~~F[a].x + Cg[x] * c, ~~F[a].y + Dg[x] * c, od);
                            0 < f && (J[f] = x + 1)
                        }
                        break
                    } else if (H[d] == jd || H[d] == yd) {
            d = O[e + Eg[x + 1 & 7]];
            0 <= d && H[d] != jd && H[d] != yd && (d = -1);
            f = O[e + Eg[x + 2 & 7]];
            0 <= f && H[f] != jd && H[f] !=
                yd && (f = -1);
            c = O[e + Eg[x + 3 & 7]];
            0 <= c && H[c] != jd && H[c] != yd && (c = -1);
            h = O[e + Eg[x + 4 & 7]];
            0 <= h && H[h] != jd && H[h] != yd && (h = -1);
            r = O[e + Eg[x + 5 & 7]];
            0 <= r && H[r] != jd && H[r] != yd && (r = -1);
            q = O[e + Eg[x + 6 & 7]];
            0 <= q && H[q] != jd && H[q] != yd && (q = -1);
            w = O[e + Eg[x + 7 & 7]];
            0 <= w && H[w] != jd && H[w] != yd && (w = -1);
            z = O[e + Eg[x] + Eg[x + 1 & 7]];
            0 <= z && H[z] != jd && H[z] != yd && (z = -1);
            var Ea = O[e + Eg[x] + Eg[x + 2 & 7]];
            0 <= Ea && H[Ea] != jd && H[Ea] != yd && (Ea = -1);
            var Qa = O[e + Eg[x] + Eg[x + 3 & 7]];
            0 <= Qa && H[Qa] != jd && H[Qa] != yd && (Qa = -1);
            var Wa = O[e + Eg[x] + Eg[x + 5 & 7]];
            0 <= Wa && H[Wa] != jd && H[Wa] != yd &&
                (Wa = -1);
            var La = O[e + Eg[x] + Eg[x + 6 & 7]];
            0 <= La && H[La] != jd && H[La] != yd && (La = -1);
            var Sa = O[e + Eg[x] + Eg[x + 7 & 7]];
            0 <= Sa && H[Sa] != jd && H[Sa] != yd && (Sa = -1);
            if (0 == (x & 1)) 0 <= r && 0 <= q && 0 > d && 0 > f ? x = x + 1 & 7 : 0 <= f && 0 <= c && 0 > w && 0 > q ? x = x - 1 & 7 : 0 <= d && 0 <= q && 0 > f && 0 > c && 0 > r ? x = x + 3 & 7 : 0 <= z && 0 <= La && 0 > Ea && 0 > Qa && 0 > Wa ? x = x + 3 & 7 : 0 <= f && 0 <= w && 0 > c && 0 > r && 0 > q ? x = x - 3 & 7 : 0 <= Ea && 0 <= Sa && 0 > Qa && 0 > Wa && 0 > La ? x = x - 3 & 7 : 0 <= q && 0 > d && 0 > f && 0 > r ? x = x + 2 & 7 : 0 <= f && 0 > c && 0 > r && 0 > q && (x = x - 2 & 7);
            else {
                var fa = O[e + Eg[x] + Eg[x + 2 & 7] + Eg[x + 3 & 7]];
                0 <= fa && H[fa] != jd && H[fa] != yd && (fa = -1);
                e = O[e + Eg[x] +
                    Eg[x + 6 & 7] + Eg[x + 5 & 7]];
                0 <= e && H[e] != jd && H[e] != yd && (e = -1);
                0 <= w && 0 <= r && 0 > d && 0 > h ? x = x + 1 & 7 : 0 <= d && 0 <= c && 0 > h && 0 > w ? x = x - 1 & 7 : 0 <= d && 0 <= q && 0 <= w && 0 > f && 0 > r ? x = x + 3 & 7 : 0 <= z && 0 <= La && 0 > Ea && 0 > Qa && 0 > Wa ? x = x + 3 & 7 : 0 <= Ea && 0 <= Wa && 0 > Qa && 0 > fa ? x = x + 3 & 7 : 0 <= d && 0 <= f && 0 <= w && 0 > c && 0 > q ? x = x - 3 & 7 : 0 <= Ea && 0 <= Sa && 0 > Qa && 0 > Wa && 0 > La ? x = x - 3 & 7 : 0 <= Qa && 0 <= La && 0 > Wa && 0 > e ? x = x - 3 & 7 : 0 <= w && 0 > d ? x = x + 2 & 7 : 0 <= d && 0 > w && (x = x - 2 & 7)
            }
        } else H[d] == Kc || H[d] == Mc || 6 == H[d] || H[d] == Rc || H[d] == ed || H[d] == qd ? (H[d] = D, J[d] = 0) : H[d] == Lc || H[d] == Uc || H[d] == hd || H[d] == pd || 37 == H[d] || H[d] == Bd ?
            (H[d] = od, J[d] = x + 1) : H[d] == sd && (H[d] = od, J[d] = sd << 8 | x + 1);
        else d <= E && 1E3 <= ja[ia] - Nd && (f = je(~~F[a].x + Cg[x], ~~F[a].y + Dg[x], od), 0 < f && (J[f] = x + 1));
        J[a] = P << 8 | A << 4 | x + 1
    } else if (H[a] == pd) {
        if (100 <= J[a]) return V(a), 1;
        I[a].x += 0.2 * v[d].x;
        I[a].y += 0.2 * v[d].y;
        O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0, 0.1)), O[e + 1] == Ld && (I[a].x += Y(0, 0.1)));
        I[a].x += Y(-0.01, 0.01);
        I[a].y += Y(0.02, 0.05);
        vf(I[a], 0.9);
        b.add(I[a]);
        e = Gg(a, b);
        x = $(8);
        f = 5 > x ? e - g : 6 > x ? e - 1 : 7 > x ? e + 1 : e + g;
        d = O[f];
        if (0 <= d)
            if (0 != Jg[H[d]]) W(200) < 200 - J[a] && (J[a] = Fe(J[a] + Jg[H[d]],
                0, 100), H[d] = pd, J[d] = 100);
            else if (H[d] == Cd && 0 == ke[d]) return J[d] = 4 | (5 > x ? 2 : 6 > x ? 1 : 7 > x ? 3 : 0), ke[d] = pd, V(a), 1
    } else if (H[a] == qd) {
        b.set(I[a]);
        vf(I[a], 0.3);
        e = Gg(a, b);
        if (1E3 > ja[ia] - Nd) return 0;
        if (0 == J[a]) {
            P = ~~F[a].x + $(3) - 1;
            A = ~~F[a].y - $(2);
            f = A * g + P;
            d = O[f];
            if (d <= E)
                for (c = 0; 8 > c; c++)
                    if (d = O[f + Bg[c]], 0 <= d && H[d] != qd && H[d] != ed) {
                        50 > W(100) && je(P, A, qd);
                        break
                    }
            O[e + g] <= E && O[e + 2 * g] <= E && O[e + g - 1] <= E && O[e + g + 1] <= E && 8 > W(100) && (f = je(~~F[a].x, ~~F[a].y + 1, qd), 0 < f && (J[f] = 1))
        } else 1 == J[a] && (O[e + g] <= E && O[e + 2 * g] <= E && O[e + g - 1] <= E && O[e + g +
            1] <= E && 20 > W(100) && (f = je(~~F[a].x, ~~F[a].y + 1, qd), 0 < f && (J[f] = 1)), 4 > W(100) && (J[a] = 2))
    } else if (H[a] == rd) {
        if (b.y += Y(0.01, 0.1), b.add(I[a]), vf(I[a], 0.75), e = Gg(a, b), e += $(3) - 1, e += ($(3) - 1) * g, d = O[e], 0 <= d) {
            if (H[d] == Lc) return H[d] = 37, J[d] = 0, V(a), 1;
            if (H[d] == Xc && 50 > W(100)) return V(a), 1
        }
    } else if (37 == H[a]) {
        if (I[a].x += 0.2 * v[d].x, I[a].y += 0.2 * v[d].y, O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2))), I[a].x += Y(-0.01, 0.01), I[a].y += Y(0.01, 0.05), vf(I[a], 0.9), b.add(I[a]), e = Gg(a, b), f = e + ($(5) - 2),
            f += ($(5) - 2) * g, d = O[f], 0 <= d && (H[d] == Mc || 6 == H[d] || H[d] == jd) && (H[d] = Kc, J[d] = 0), x = $(8), f = 5 > x ? e - g : 6 > x ? e - 1 : 7 > x ? e + 1 : e + g, d = O[f], 0 <= d)
            if (7 > x && (1 == Zf[H[d]] && H[d] != Wc || H[d] == dd)) 10 > W(100) && Fg(a, d, e, f);
            else if (H[d] == qd) H[d] = Kc, J[d] = 0;
        else if (H[d] == Cd && 0 == ke[d]) return J[d] = 4 | (5 > x ? 2 : 6 > x ? 1 : 7 > x ? 3 : 0), ke[d] = 37, V(a), 1
    } else if (H[a] == sd) {
        if (0 == J[a]) 1 < df(I[a]) ? J[a] = 1 : le(I[a], 0, 0);
        else if (1 == J[a]) {
            b.set(I[a]);
            x = 0.5 * Ze(b);
            1 > x && (x = 1);
            for (c = 1; 6 > c; c++)
                if (f = ~~(F[a].y + 0.5 + b.y * c) * g + ~~(F[a].x + 0.5 + b.x * c), d = O[f], 0 <= d)
                    if (H[d] == sd) J[d] =
                        1, I[d].x = 0.98 * I[a].x, I[d].y = 0.98 * I[a].y;
                    else break;
            else break;
            for (c = 0; 4 > c; c++) f = e + Bg[c], d = O[f], 0 <= d && H[d] == sd && 0 == J[d] && (J[d] = 1, A = $(512), I[d].x = Pb[A][0] * x, I[d].y = Pb[A][1] * x);
            H[a] = Wc;
            J[a] = 0
        }
        O[e] = a
    } else if (H[a] == vd) {
        if (0 == J[a]) J[a] = 1, I[a].x = Y(-1, 1), I[a].y = Y(-1, 1);
        else if (2 == J[a])
            if (2 > W(100)) J[a] = 1, vf(I[a], -1);
            else return O[e] = a, 0;
        b.x += 0.5 * I[a].x;
        b.y += 0.5 * I[a].y;
        f = Gg(a, b);
        e == f && (50 > W(100) ? le(I[a], I[a].y, -I[a].x) : le(I[a], -I[a].y, I[a].x));
        e = f;
        f += $(5) - 2;
        x = $(5);
        f += (x - 2) * g;
        d = O[f];
        if (0 <= d)
            if (3 > x && 2 == Zf[H[d]]) Fg(a,
                d, e, f);
            else {
                if (H[d] == Mc || H[d] == ed) return H[d] = vd, I[d].set(I[a]), J[d] = 1, V(a), 1;
                6 == H[d] ? J[a] = 2 : 3 == Zf[H[d]] && (H[a] = D)
            }
        e = 9;
        c = ~~(F[a].x + 4 * I[a].x);
        h = ~~(F[a].y + 4 * I[a].y);
        r = ug(c - e, u);
        q = ug(h - e, u);
        w = vg(c + e, g - u - 1);
        z = vg(h + e, (rc - 1) * u - 1);
        le(b, 0, 0);
        La = Wa = Qa = Ea = 0;
        for (A = q; A <= z; A++)
            for (f = A * g, P = r; P <= w; P++) x = (P - c) * (P - c) + (A - h) * (A - h), x > e * e || (d = O[f + P], 0 <= d ? H[d] == vd ? (b.x += I[d].x, b.y += I[d].y, Ea++) : H[d] != Mc && H[d] != ed && 6 != H[d] && (Qa += P, Wa += A, La++) : E < d && (Qa += P, Wa += A, La++));
        0 < Ea && vf(b, 1 / Ea);
        Ze(I[a]);
        I[a].x = 0.5 * I[a].x + 0.5 * b.x;
        I[a].y = 0.5 * I[a].y + 0.5 * b.y;
        I[a].x += Y(-0.1, 0.1);
        I[a].y += Y(-0.1, 0.1);
        0 < La && (Qa = ~~(Qa / La) - F[a].x, Wa = ~~(Wa / La) - F[a].y, 0 > I[a].y * Qa - I[a].x * Wa ? le(b, I[a].y, -I[a].x) : le(b, -I[a].y, I[a].x), I[a].x = 0.9 * I[a].x + 0.1 * b.x, I[a].y = 0.9 * I[a].y + 0.1 * b.y)
    } else if (H[a] == yd && (I[a].x += 0.2 * v[d].x, I[a].y += 0.2 * v[d].y, O[e + g] != Ld && (O[e - 1] == Ld && (I[a].x -= Y(0.1, 0.2)), O[e + 1] == Ld && (I[a].x += Y(0.1, 0.2))), I[a].x += Y(-0.01, 0.01), I[a].y += Y(0.01, 0.05), vf(I[a], 0.9), b.add(I[a]), e = Gg(a, b), x = $(8), f = 1 > x ? e - g : 2 > x ? e - 1 : 3 > x ? e + 1 : e + g, d = O[f], 0 <= d))
        if (0 < x &&
            (1 == Zf[H[d]] || 2 == Zf[H[d]] && H[d] != yd)) Fg(a, d, e, f);
        else if (H[d] == Cd && 0 == ke[d]) return J[d] = 4 | (1 > x ? 2 : 2 > x ? 1 : 3 > x ? 3 : 0), ke[d] = yd, V(a), 1;
    return 0
}

function nf(a, b) {
    var c, d, e;
    d = (F[a].y >> 2) * s + (F[a].x >> 2);
    e = R[a];
    O[e] = Ld;
    b.set(v[d]);
    if (H[a] == zd) {
        vf(b, 0.05);
        I[a].add(b);
        I[a].y += 0.01; - 3 <= O[e + 1] && (I[a].x -= W(0.5)); - 3 <= O[e - 1] && (I[a].x += W(0.5)); - 3 <= O[e + g] && (I[a].y -= W(0.5)); - 3 <= O[e + 2 * g] && (I[a].y -= W(0.5)); - 3 <= O[e - g] && (I[a].y += W(0.5));
        vf(I[a], 0.98);
        b.set(I[a]);
        e = Gg(a, b);
        e += $(5) - 2;
        e += ($(5) - 2) * g;
        var f = O[e - g];
        if (0 <= f)
            if (H[f] == Kc) H[f] = D;
            else {
                if (H[f] == Lc || 37 == H[f] || H[f] == hd) return V(a), 1;
                11 == H[f] ? H[f] = Lc : H[f] == ed && (H[f] = D)
            }
        if (15 > W(100)) return V(a), 1
    } else if (H[a] ==
        Ad)
        if (le(b, 0, 0), e = Gg(a, b), 256 > J[a]) e += $(3) - 1, e += ($(3) - 1) * g, f = O[e], 0 <= f && (3 == Zf[H[f]] && H[f] != zd ? J[a] += 256 : H[f] == Lc ? H[a] = Nc : 37 == H[f] && (H[a] = Nc));
        else {
            if (J[a] += 256, 768 <= J[a]) {
                d = J[a] & 255;
                var h = zd;
                d == Uc ? h = D : d == dd ? h = dd : d == hd && (h = Qc);
                0 <= O[e + 1] && (O[e - 1] <= E && je(~~F[a].x - 1, ~~F[a].y, h), O[e - 1 - g] <= E && je(~~F[a].x - 1, ~~F[a].y - 1, h), O[e - 1 + g] <= E && je(~~F[a].x - 1, ~~F[a].y + 1, h));
                0 <= O[e - 1] && (O[e + 1] <= E && je(~~F[a].x + 1, ~~F[a].y, h), O[e + 1 - g] <= E && je(~~F[a].x + 1, ~~F[a].y - 1, h), O[e + 1 + g] <= E && je(~~F[a].x + 1, ~~F[a].y + 1, h));
                0 <= O[e + g] &&
                    (O[e - g] <= E && je(~~F[a].x, ~~F[a].y - 1, h), O[e - 1 - g] <= E && je(~~F[a].x - 1, ~~F[a].y - 1, h), O[e + 1 - g] <= E && je(~~F[a].x + 1, ~~F[a].y - 1, h));
                0 <= O[e - g] && (O[e + g] <= E && je(~~F[a].x, ~~F[a].y + 1, h), O[e - 1 + g] <= E && je(~~F[a].x - 1, ~~F[a].y + 1, h), O[e + 1 + g] <= E && je(~~F[a].x + 1, ~~F[a].y + 1, h));
                for (c = 0; 8 > c; c++) d = e + Bg[c], f = O[d], 0 <= f && (H[f] == Ad && 256 > J[f] ? J[f] += 256 : H[f] == Tc ? (I[f].y -= 50, J[f] += 100) : H[f] == Uc ? J[f] = 1 : H[f] == Vc ? J[f] = 1 : H[f] == dd ? I[f].y -= 20 : H[f] == gd && (J[f] = 1));
                H[a] = h;
                J[a] = 0
            }
        } else if (H[a] == Bd)
        if (b.y += Y(-0.01, -0.02), b.add(I[a]), vf(I[a],
                0.9), e = Gg(a, b), h = $(4), d = 1 > h ? e - g : 2 > h ? e - 1 : 3 > h ? e + 1 : e + g, f = O[d], 0 <= f)
            if (3 > h && (1 == Zf[H[f]] || 2 == Zf[H[f]])) Fg(a, f, e, d);
            else if (H[f] == Bd) I[a].x += Y(-0.1, 0.1), I[a].y += Y(-0.1, 0.1);
    else if (6 == H[f]) H[a] = Lc;
    else if (H[f] == Pc) H[a] = 11;
    else if (H[f] == Vc) H[a] = Lc;
    else if (H[f] == fd) H[a] = Lc;
    else if (H[f] == jd) H[a] = id;
    else if (H[f] == qd) H[a] = Lc;
    else if (H[f] == Ad) H[a] = Lc;
    else {
        if (H[f] == Cd && 0 == ke[f]) return J[f] = 4 | (1 > h ? 2 : 2 > h ? 1 : 3 > h ? 3 : 0), ke[f] = Lc, V(a), 1
    } else -1 == f && (H[a] = Lc);
    else if (H[a] == Cd) {
        le(b, 0, 0);
        e = Gg(a, b);
        if (0 == ke[a]) return 0;
        var h = J[a] & 3,
            r = J[a] >> 2,
            q = [g, -1, -g, 1],
            w;
        Xb += Zb;
        Xb &= 1023;
        w = 0.5 > Wb[Xb] ? 1 : -1;
        for (c = 0; 4 > c; c++)
            if (2 != c && (d = e + q[h + c * w & 3], f = O[d], 0 <= f && H[f] == Cd)) {
                0 == ke[f] ? (Fg(a, f, e, d), J[a] = r << 2 | h + c * w & 3) : ke[a] == ke[f] ? (h = J[f] & 3, r += J[f] >> 2, J[f] = r << 2 | h, J[a] = 0, ke[a] = 0) : J[a] = r << 2 | h + 2 & 3;
                break
            }
        4 == c && (O[e + 2 * q[h]] <= E && 1E3 <= ja[ia] - Nd && (e = F[a].x + 0.5, d = F[a].y + 0.5, 0 == h ? je(e, d + 2, ke[a]) : 1 == h ? je(e - 2, d, ke[a]) : 2 == h ? je(e, d - 2, ke[a]) : 3 == h && je(e + 2, d, ke[a])), 1 >= r ? (J[a] = 0, ke[a] = 0) : J[a] = r - 1 << 2 | h)
    }
    return 0
}
var ac = new Pa,
    Sd = 0,
    oe = 100,
    Ud = Array(oe),
    Td = Array(oe),
    cf = Array(oe),
    of = Array(oe),
    qf = Array(1024),
    rf = Array(1024),
    sf = Array(1024),
    pf = 0;

function ge(a, b) {
    Sd != oe && (Ud[Sd] = a, Td[Sd] = b, cf[Sd] = 0.5, of[Sd] = 0, Sd++)
}
var pe = 0,
    ue = 2E3,
    uf = Array(ue),
    tf = Array(ue),
    xf = Array(ue),
    ve, we, xe, wf = Array(ue);

function wg(a, b) {
    pe != ue && (uf[pe] = a, tf[pe] = b, xf[pe] = ve, wf[pe] = 0, pe++)
}

function yf(a, b) {
    var c = we,
        d = new Bc;
    d.x = uf[b] - uf[a];
    d.y = tf[b] - tf[a];
    var e = Ze(d);
    0 != e && (e = c - e, uf[a] -= d.x * e * 0.5, tf[a] -= d.y * e * 0.5, uf[b] += d.x * e * 0.5, tf[b] += d.y * e * 0.5)
}

function zf(a, b, c, d, e) {
    c -= a;
    d -= b;
    var f;
    We(c) >= We(d) ? (f = k(We(c)), 0 != c && (d /= We(c)), c = 0 <= c ? 1 : -1) : (f = k(We(d)), 0 != d && (c /= We(d)), d = 0 <= d ? 1 : -1);
    a += 0.5;
    b += 0.5;
    for (var h = 0; h <= f; h++, a += c, b += d) 8 > a || 408 <= a || 8 > b || 308 <= b || O[k(b) * g + k(a)] <= E && je(k(a), k(b), e)
}
for (var Vd = 0, ye = 50, Wd = 28, L = Array(ye * Wd), X = Array(ye * Wd), ze = Array(ye * Wd), Mf = Array(ye), K = Array(ye), Ae = Array(ye), Be = Array(ye), Zd = Array(ye), Ce = Array(ye), Vd = 0; Vd < ye * Wd; Vd++) L[Vd] = new Bc;
for (Vd = 0; Vd < ye * Wd; Vd++) X[Vd] = new Bc;
for (Vd = 0; Vd < ye; Vd++) Mf[Vd] = new Bc;

function he(a, b, c, d) {
    if (Vd != ye) {
        var e, f, h = 0,
            r = 0,
            q = 0;
        if (30 == c || 32 == c) {
            for (e = 0; e < Vd; e++) K[e] == $d && (h++, r = 1 - Ce[e], q = e);
            if (2 <= h || 0 != d && 0 == Xf[d]) return
        }
        f = Vd * Wd;
        for (e = 0; 20 > e; e++) le(L[f + e], a + W(4), b + W(4)), X[f + e].set(L[f + e]);
        for (e = 0; e < Wd; e++) ze[f + e] = 0;
        le(Mf[Vd], 0, 0);
        K[Vd] = Xd;
        Ae[Vd] = 0;
        Be[Vd] = 0;
        Zd[Vd] = d;
        Ce[Vd] = 0;
        22 == c ? 10 == d ? (K[Vd] = ae, Zd[Vd] = 0, le(L[f + 0], a, b), X[f + 0].set(L[f + 0])) : K[Vd] = Yd : 30 == c ? (K[Vd] = $d, Ce[Vd] = r) : 32 == c && (K[Vd] = $d, 0 == h ? Ce[Vd] = 0 : (c = k(L[q * Wd].x) >> 2 << 2, d = k(L[q * Wd].y) >> 2 << 2, a < c ? (Ce[Vd] = 1, Ce[q] = 0) :
            a > c ? (Ce[Vd] = 0, Ce[q] = 1) : b < d ? (Ce[Vd] = 1, Ce[q] = 0) : (Ce[Vd] = 0, Ce[q] = 1)));
        Vd++
    }
}

function $f(a) {
    if (0 != Vd) {
        var b, c, d;
        c = a * Wd;
        d = (Vd - 1) * Wd;
        for (b = 0; b < Wd; b++, c++, d++) L[c].set(L[d]), X[c].set(X[d]), ze[c] = ze[d];
        Mf[a].set(Mf[Vd - 1]);
        K[a] = K[Vd - 1];
        Ae[a] = Ae[Vd - 1];
        Be[a] = Be[Vd - 1];
        Zd[a] = Zd[Vd - 1];
        Ce[a] = Ce[Vd - 1];
        Vd--
    }
}

function Af(a, b, c) {
    var d = new Bc;
    Xe(d, L[a], X[a]);
    X[a].set(L[a]);
    d.y += b;
    vf(d, c);
    L[a].add(d)
}

function Vf(a, b, c, d, e) {
    var f = new Bc;
    Xe(f, L[b], L[a]);
    var h = Ze(f);
    0 != h && (c -= h, h = new Bc, bf(h, f, c * d), L[a].sub(h), bf(h, f, c * e), L[b].add(h))
}
var Kg = [0, 0.5, 0.5, 0.8, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.8, 0.5, 0, 0.5, 0.5, 0.5, 0, 0.8, 0.5, 0, 1, 1, 0, 0.5, 0, 0.5, 0, 0, 0.8, 0.5, 0.5, 0.8, 0.9, 0.1, 0, 1, 0.5, 0.5, 1, 0.5],
    Xf = [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];

function Wf(a, b, c, d) {
    var e = new Bc;
    Xe(e, L[a], X[a]);
    L[a].set(X[a]);
    if (0 != b) {
        var f = (k(L[a].y) >> 2) * s + (k(L[a].x) >> 2);
        e.x += v[f].x * b;
        e.y += v[f].y * b
    }
    0 == d ? (f = df(e) + 1, 8 <= f ? (vf(e, 3.8 / f), b = 2) : 4 <= f ? (vf(e, 0.5), b = 2) : b = 1) : (b = k(df(e) / 3) + 1, vf(e, 1 / b));
    ze[a] = 0;
    if (1 == c) vf(e, b), L[a].add(e), L[a].x = Fe(L[a].x, 4, g - 5), L[a].y = Fe(L[a].y, 4, 311);
    else
        for (d = 0; d < b; d++) {
            c = L[a].y + e.y;
            if (4 > c || 312 <= c) {
                ze[a] = -5;
                break
            }
            f = k(c) * g + k(L[a].x);
            O[f] <= E ? L[a].y = c : -1 >= O[f] ? (e.x *= 0.5, e.y = -e.y, ze[a] = O[f]) : (e.x *= Kg[H[O[f]]], ze[a] = H[O[f]], 0 > e.y ? L[a].y =
                c : 2 == Zf[H[O[f]]] && H[O[f]] != yd ? L[a].y = c : e.y = -e.y);
            c = L[a].x + e.x;
            if (4 > c || g - 4 <= c) {
                ze[a] = -5;
                break
            }
            f = k(L[a].y) * g + k(c);
            if (O[f] <= E) L[a].x = c;
            else if (-1 >= O[f]) e.y *= 0.5, e.x = -e.x, ze[a] = O[f];
            else if (e.y *= Kg[H[O[f]]], e.x = -e.x, ze[a] = H[O[f]], 2 == Zf[H[O[f]]] || 6 == H[O[f]]) L[a].x = c
        }
}

function Yf(a, b) {
    for (var c = 0, d = a; d < b; d++) {
        if (-5 == ze[d]) return -5;
        if (0 > ze[d]) c = 1;
        else {
            if (3 == Zf[ze[d]]) return 3;
            if (ze[d] == pd) return -5;
            0 != ze[d] && (c = 1)
        }
    }
    return c
}

function ag(a, b, c) {
    var d, e = new Bc,
        f, h;
    if (0 == Be[a]) {
        if (42 == da && Me || 42 == ea && Oe)
            for (f = 20, d = b; d < c; d++) e.x = Fc - X[d].x, e.y = Gc - X[d].y, h = df(e), 20 > h && h < f && (f = h, Be[a] = d - b + 1)
    } else 42 == da && Ue || 42 == ea && Ve ? (L[b + Be[a] - 1].x += 0.2 * (Fc - L[b + Be[a] - 1].x), L[b + Be[a] - 1].y += 0.2 * (Gc - L[b + Be[a] - 1].y)) : Be[a] = 0
}
var Xd = 10,
    Yd = 20,
    $d = 30,
    ae = 40,
    Nf = [0, 0],
    Pf = [0, 0],
    Of = [0, 0],
    ce = 50,
    M = Array(ce),
    Z = Array(ce),
    de = Array(ce),
    U = Array(ce),
    De = Array(ce),
    N = Array(ce),
    fg;
for (fg = 0; fg < ce; fg++) M[fg] = new Bc;
for (fg = 0; fg < ce; fg++) Z[fg] = new Bc;

function ie(a, b, c) {
    var d;
    for (d = 0; d < ce; d++)
        if (0 == de[d]) {
            le(M[d], a + 0.5, b + 0.5);
            le(Z[d], 0, 0);
            de[d] = 1;
            U[d] = 0;
            De[d] = 0;
            N[d] = c;
            break
        }
}
var cg = [-g - 1, -g, -g + 1, -1, 0, 1, g - 1, g, g + 1, 2 * -g - 1, 2 * -g, 2 * -g + 1, 2 * g - 1, 2 * g, 2 * g + 1, -2 - g, -2, -2 + g, 2 - g, 2, 2 + g, 3 * -g - 1, 3 * -g, 3 * -g + 1, 3 * g - 1, 3 * g, 3 * g + 1, -3 - g, -3, -3 + g, 3 - g, 3, 3 + g, -2 - 2 * g, 2 - 2 * g, -2 + 2 * g, 2 + 2 * g],
    ig = [-0.7, 0, 0.7, -1, 0, 1, -0.7, 0, 0.7, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.7, 0.7, -0.7, 0.7],
    jg = [-0.7, -1, -0.7, 0, 0, 0, 0.7, 1, 0.7, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.7, -0.7, 0.7, 0.7],
    qg = [-1,
        0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -2, 2, -2, 2
    ],
    tg = [-1, -1, -1, 0, 0, 0, 1, 1, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -1, 0, 1, -1, 0, 1, -2, -2, 2, 2],
    dg = [0, 0, 0.1, 0.1, -0.03, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.02, 0.05, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, -0.01, 0.1, 0.1, 0.2, 0, 0.1, 0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0, 0.2, 0.1, 0.1, -0.02, 0.1],
    eg = [0, 0, 0.5, 0.4, 0.5, 0.5, 0.4, 0.4, 0.9, 0, 0.3, 0.5, 0.5, 0.3, 0.3, 0.3, 0, 0.2, 0, 0.1, 0, 0.5, 0, 0.3, 0.5, 0.3, 0.5, 0.4, 0, 0, 0, 0.1, 0, 0, 0.4, 0.4, 0.5, 0.4, 0.2, 0.5,
        0, 0, 0.5, 0.2, 0.5, 0
    ],
    bg = [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1];

function hg(a, b, c) {
    if (N[a] != Kc)
        if (N[a] == Lc) {
            if (b == D) return V(c), 1;
            if (6 == b) H[c] = Mc, J[c] = 0;
            else if (b == Pc) fg = Pc;
            else if (11 == b) 20 <= ++U[a] && (fg = Pc);
            else {
                if (b == Xc) return 1;
                if (b == fd) V(c);
                else {
                    if (b == id) return 1;
                    if (b == jd) 10 > W(100) && (H[c] = Kc, J[c] = 0);
                    else {
                        if (b == od) return 1;
                        b == rd ? (20 <= ++U[a] && (fg = 37), V(c)) : b == Ad && (H[c] = Nc, J[c] = 0)
                    }
                }
            }
        } else if (N[a] == Pc)
        if (b == Lc) H[c] = Pc, J[c] = 0;
        else if (b == D) 20 <= ++U[a] && (fg = Lc);
    else if (b == Pc) U[a] = 0;
    else if (11 == b) U[a] = 0;
    else if (b == Xc) fg = Lc;
    else if (b == fd) 20 <= ++U[a] && (fg = Lc);
    else {
        if (b ==
            id) return 1;
        b == od ? 20 <= ++U[a] && (fg = Lc) : b == zd && 20 <= ++U[a] && (fg = Lc)
    } else if (37 == N[a])
        if (b == Lc) U[a] = 0;
        else {
            if (b == D) return 20 <= ++U[a] && (fg = rd), V(c), 1;
            if (b == Mc) H[c] = Kc, J[c] = 0;
            else if (6 == b) H[c] = Kc, J[c] = 0;
            else if (b == Pc) fg = Pc;
            else if (11 == b) 20 <= ++U[a] && (fg = Pc);
            else if (b == Xc) fg = rd;
            else if (b == fd) 20 <= ++U[a] && (fg = rd), V(c);
            else {
                if (b == id) return 1;
                if (b == jd) H[c] = Kc, J[c] = 0;
                else {
                    if (b == od) return 20 <= ++U[a] && (fg = rd), 1;
                    b == qd ? (H[c] = Kc, J[c] = 0) : b == rd ? 20 > U[a] && (V(c), U[a]++) : b == zd ? (20 <= ++U[a] && (fg = rd), V(c)) : b == Ad && (H[c] = Nc,
                        J[c] = 0)
                }
            }
        } else if (N[a] == rd)
        if (b == Lc) fg = 37;
        else {
            if (b == Xc || b == id) return 1
        } else if (N[a] == D) b == Kc ? (H[c] = D, J[c] = 0) : b == Mc ? (H[c] = D, J[c] = 0) : 6 == b ? (H[c] = D, J[c] = 0) : b == Nc ? (H[c] = D, J[c] = 0) : b == Pc ? (H[c] = Lc, J[c] = 0) : 11 == b ? (H[c] = Lc, J[c] = 0) : b == Tc ? H[c] == Tc && 0 < J[c] && 100 > J[c] && (I[c].y -= 50, J[c] += 100) : b == Uc ? (H[c] = D, J[c] = 0) : b == Vc ? (H[c] = D, J[c] = 0) : b == dd ? (H[c] = D, J[c] = 0) : b == ed ? (H[c] = D, J[c] = 0) : b == gd ? (H[c] = D, J[c] = 0) : b == qd ? (H[c] = D, J[c] = 0) : b == vd ? (H[c] = D, J[c] = 0) : b == Ad && (H[c] = D, J[c] = 0);
    else if (N[a] == Mc) b == Kc ? 1 == U[a] ? fg = 6 : (H[c] = Mc, J[c] =
        0) : b == Lc ? U[a] = 1 : b == qd && (H[c] = 6, J[c] = 0);
    else if (6 == N[a]) b == Mc ? J[c] = 1 : b == Uc && (U[a] = 1);
    else if (N[a] == Nc) b == Lc ? 20 > U[a] && U[a]++ : b == D ? 0 < U[a] && U[a]-- : b == Xc ? 0 < U[a] && U[a]-- : b == fd ? 0 < U[a] && U[a]-- : b == hd ? 20 > U[a] && U[a]++ : b == id ? 0 < U[a] && U[a]-- : b == od ? 0 < U[a] && U[a]-- : 37 == b ? 20 > U[a] && U[a]++ : b == zd && 0 < U[a] && U[a]--;
    else if (N[a] == Uc) {
        if (b == Xc) return 1;
        if (b == hd) V(c);
        else {
            if (b == id || b == od) return 1;
            b == Ad && 256 > J[c] && (J[c] = Uc)
        }
    } else if (N[a] == hd)
        if (b == Pc) fg = Pc;
        else if (b == Uc) V(c);
    else {
        if (b == Xc) return 1;
        if (b == fd) V(c);
        else {
            if (b == id ||
                b == od) return 1;
            b == zd ? V(c) : b == Ad && 256 > J[c] && (J[c] = hd)
        }
    } else if (N[a] != Oc)
        if (N[a] == Sc) {
            if (b == id || b == od) return 1
        } else if (N[a] == $c) 0 == U[a] && 0 < b ? U[a] = b : 0 != U[a] && 0 < b && (H[c] = U[a], J[c] = 0, ke[c] = 0);
    else if (N[a] == dd) b == Ad && 256 > J[c] && (J[c] = dd);
    else if (N[a] == pd) {
        if (0 == Jg[b] && b != Sc || V(c), b == id || b == od) return 1
    } else if (N[a] == vd) b != Mc && b != ed || V(c), 6 == b && vf(Z[a], 0.9);
    else if (N[a] == id) {
        if (37 == b) return H[c] = id, J[c] = 0;
        if (b == id) return 1;
        if (b == jd) H[c] = id, J[c] = 6E3;
        else if (b == yd) return H[c] = id, J[c] = 6100, 1
    } else if (N[a] == Wc)
        if (b ==
            Lc) U[a] = 0;
        else if (b == Xc) 20 <= ++U[a] && (fg = Xc);
    else if (b == Wc) {
        if (!(1E3 > ja[ia] - Nd) && 10 < Z[a].x * Z[a].x + Z[a].y * Z[a].y) {
            c = k(M[a].x) + k(W(5)) - 2;
            var d = k(M[a].y) + k(W(5)) - 2,
                e = d * g + c;
            O[e] <= E && je(c, d, zd)
        }
    } else {
        if (b == zd) return 1
    } else if (N[a] == Xc) b == Lc ? (20 <= ++U[a] && (fg = jd), H[c] = Qc, J[c] = 0) : b == Xc ? U[a] = 0 : b == hd ? (20 <= ++U[a] && (fg = sd), H[c] = Qc, J[c] = 0) : 37 == b && (20 <= ++U[a] && (fg = Wc), H[c] = Qc, J[c] = 0), b == Kc ? (H[c] = D, J[c] = 0) : b == Mc ? (H[c] = D, J[c] = 0) : 6 == b ? (H[c] = D, J[c] = 0) : b == Nc ? (H[c] = D, J[c] = 0) : b == Pc ? (H[c] = Lc, J[c] = 0) : 11 == b ? (H[c] = Lc, J[c] =
        0) : b == Rc ? (H[c] = D, J[c] = 0) : b == Tc ? H[c] == Tc && 0 < J[c] && 100 > J[c] && (I[c].y -= 50, J[c] += 100) : b == Uc ? (H[c] = D, J[c] = 0) : b == Vc ? (H[c] = D, J[c] = 0) : b != Wc && (b == dd ? (H[c] = D, J[c] = 0) : b == ed ? (H[c] = D, J[c] = 0) : b == gd ? (H[c] = D, J[c] = 0) : b != jd && (b == qd ? (H[c] = D, J[c] = 0) : b != sd && (b == vd ? (H[c] = D, J[c] = 0) : b != yd && b == Ad && (H[c] = D, J[c] = 0))));
    else if (N[a] == jd)
        if (b == Lc) U[a] = 0;
        else if (b == Xc) 20 <= ++U[a] && (fg = Xc);
    else if (b == jd) !(1E3 > ja[ia] - Nd) && 10 < Z[a].x * Z[a].x + Z[a].y * Z[a].y && (c = k(M[a].x) + k(W(5)) - 2, d = k(M[a].y) + k(W(5)) - 2, e = d * g + c, O[e] <= E && je(c, d, zd));
    else {
        if (b ==
            id || b == od || b == zd) return 1
    } else if (N[a] == sd)
        if (b == Lc) U[a] = 0;
        else if (b == Xc) 20 <= ++U[a] && (fg = Xc);
    else {
        if (b == id || b == od) return 1
    } else if (N[a] == fd) b == Kc ? (H[c] = D, J[c] = 0) : b == Mc ? (H[c] = D, J[c] = 0) : 6 == b ? (H[c] = fd, J[c] = 0) : b == Nc ? (H[c] = D, J[c] = 0) : b == Pc ? (H[c] = Lc, J[c] = 0) : 11 == b ? (H[c] = Lc, J[c] = 0) : b == Rc ? (H[c] = D, J[c] = 0) : b == Tc ? H[c] == Tc && 0 < J[c] && 100 > J[c] && (I[c].y -= 50, J[c] += 100) : b == Uc ? (H[c] = D, J[c] = 0) : b == Vc ? (H[c] = D, J[c] = 0) : b == dd ? (H[c] = D, J[c] = 0) : b == ed ? (H[c] = D, J[c] = 0) : b == gd ? (H[c] = D, J[c] = 0) : b == qd ? (H[c] = D, J[c] = 0) : b == vd ? (H[c] = D, J[c] =
        0) : b == Ad ? (H[c] = D, J[c] = 0) : b == Bd && (H[c] = Lc, J[c] = 0);
    else if (N[a] == Ad) b == Uc ? U[a] = Uc : b == dd ? U[a] = dd : b == hd && (U[a] = hd);
    else if (N[a] == Bd)
        if (6 == b) fg = Lc;
        else if (b == Pc) fg = Pc;
    else if (b == Vc) fg = Lc;
    else if (b == fd) fg = Lc;
    else if (b == jd) fg = id;
    else if (b == qd) fg = Lc;
    else if (b == Ad) fg = Lc;
    else {
        if (b == id || b == od) return 1
    } else if (N[a] == Cd && (0 == U[a] ? b == Lc ? U[a] = Lc : b == Uc ? U[a] = Uc : b == Xc ? U[a] = Xc : b == dd ? U[a] = dd : b == gd ? U[a] = gd : b == hd ? U[a] = hd : b == pd ? U[a] = pd : 37 == b ? U[a] = 37 : b == yd ? U[a] = yd : b == Bd && (U[a] = Bd) : (d = U[a] & 255, e = U[a] >> 8, b == d && (U[a] = e + 1 <<
            8 | d, V(c))), b == Xc || b == id || b == od)) return 1;
    return 2 == Zf[b] && 2 == Zf[N[a]] && N[a] != b || 2 == Zf[b] && 2 != Zf[N[a]] || 5 == Zf[b] && 5 != Zf[N[a]] || b == D ? 1 : 0
}

function mg(a, b, c, d, e, f, h, r) {
    if (0 == c) {
        for (c = 9; 21 > c; c++) {
            var q = O[b + cg[c]];
            q <= E && (q = je(k(M[a].x) + qg[c], k(M[a].y) + tg[c], d), 0 < q && (I[q].x += f + ig[c] * r, I[q].y += h + jg[c] * r, J[q] = e))
        }
        de[a] = 0
    } else if (1 == c || 2 == c) {
        for (c = 1 == c ? 9 : 0; 21 > c; c++) q = O[b + cg[c]], q <= E ? je(k(M[a].x) + qg[c], k(M[a].y) + tg[c], d) : 0 <= q && (H[q] = d, J[q] = 0, ke[q] = 0);
        de[a] = 0
    }
}
var Lg = document,
    Mg = window,
    Ob = Lg.getElementById("cv"),
    Ng = Ob.getContext("2d"),
    Og = Ng.createImageData(g, ca),
    $b = new Uint8Array(Og.data.buffer),
    Pg = Mg.console,
    Fb = String.fromCharCode,
    gc = setTimeout,
    //Qg = location.hostname;
	Qg = "dan-ball.jp";
	//Because I found out how to force it to run in dust2, it wasn't hard to crack this one ~Kippykip
Mg.fff = Rg;

function Rg(a, b, c, d, e, f, h) {
    try {
        Ob = Lg.getElementById("cv"), Ng = Ob.getContext("2d"), Ng.putImageData(a, b, c, d, e, f, h)
    } catch (r) {}
}
Mg.fff = Mb;

function Mb(a) {
    try {
        Pg.log(a)
    } catch (b) {}
}
Mg.Init = Lb;
var Nb = Fb(68, 65, 78, 45, 66, 65, 76, 76, 46, 106, 112, 32, 40, 67, 41, 32, 50, 48, 48, 55, 32, 104, 97, 53, 53, 105, 105),
    Sg = Fb(46, 47, 100, 97, 116, 97, 47),
    Tg = Fb(102, 112, 115),
    Wg = Fb(99, 97, 110, 118, 97, 115),
    Xg = Fb(50, 100),
    $g = 0,
    fh = Fb(100, 97, 110, 45, 98, 97, 108, 108, 46, 106, 112),
    l = new Int32Array(g * ca);

function qc() {
    Me = !1 == Ue && !0 == gh;
    Pe = !0 == Ue && !1 == gh;
    Oe = !1 == Ve && !0 == hh;
    Se = !0 == Ve && !1 == hh;
    Ue = gh;
    Ve = hh;
    af = !(Pe | Ue | Se | Ve);
    ih = Pe ? 1 : Se ? -1 : 0;
    xg = Ge;
    yg = He;
    Ge = jh;
    He = kh;
    for (var a = 0; 256 > a; a++) Rb[a] = Sb[a], Sb[a] = !1;
    Xb = Xb + k(1024 * Math.random()) & 1023;
    Zb = k(512 * Math.random()) | 1;
    a: if (0 < lh) lh++;
        else {
            Cb("");
            Hb("");
            ic.move();
            ic.a();
            var b, c, d, e, f;
            c = Ge;
            d = He;
            300 <= d && af && !1 == ga ? ga = !0 : 300 > d && !0 == ga && (ga = !1);
            a = 12;
            e = 311;
            b = 308 * g;
            for (f = g * ca; b < f; b++) l[b] = jb.b[b];
            if (1 == Na) {
                nc(a + 4 + 0 + 8, e + 0, 48, 137, 4282400832);
                nc(a + 4 + 56 + 8, e + 0, 48, 137, 4282400832);
                nc(a + 4 + 112 + 8, e + 0, 48, 137, 4282400832);
                nc(a + 4 + 168 + 8, e + 0, 48, 53, 4282400832);
                nc(a + 4 + 224 + 8, e + 42, 47, 53, 4282400832);
                nc(a + 4 + 224 + 16, e + 98, 39, 25, 4282400832);
                nc(a + 4 + 224 + 8, e + 126, 47, 11, 4282400832);
                nc(a + 4 + 112 + 8 - 1, e + 0 + 4, 1, 7, 4282400832);
                f = Array(48);
                for (b = 0; b < f.length; b++) f[b] = 0;
                for (b = 0; b < Nd; b++) f[H[b]]++;
                p(a + 4 + 0, e + 0, "  " + f[Kc], 4294098283, 4278190080, -1);
                p(a + 4 + 0, e + 14, "  " + f[Lc], 4282401023, 4278190080, -1);
                p(a + 4 + 0, e + 28, "  " + f[D], 4294918208, 4278190080, -1);
                p(a + 4 + 0, e + 42, "  " + f[Mc], 4287676480, 4278190080, -1);
                p(a + 4 + 0, e + 56, "  " +
                    f[Nc], 4289757264, 4278190080, -1);
                p(a + 4 + 0, e + 70, "  " + f[Oc], 4286611711, 4278190080, -1);
                p(a + 4 + 0, e + 84, "  " + f[Pc], 4291875071, 4278190080, -1);
                p(a + 4 + 0, e + 98, "  " + f[Rc], 4294918304, 4278190080, -1);
                p(a + 4 + 0, e + 112, "  " + f[Sc], 4287655952, 4278190080, -1);
                p(a + 4 + 0, e + 126, "  " + f[Tc], 4294941030, 4278190080, -1);
                p(a + 4 + 56, e + 0, "  " + f[Uc], 4286591008, 4278190080, -1);
                p(a + 4 + 56, e + 14, "  " + f[Vc], 4294967244, 4278190080, -1);
                p(a + 4 + 56, e + 28, "  " + f[Wc], 4286611584, 4278190080, -1);
                p(a + 4 + 56, e + 42, "  " + f[Xc], 4294927923, 4278190080, -1);
                p(a + 4 + 56, e + 56,
                    "  " + f[$c], 4286578816, 4278190080, -1);
                p(a + 4 + 56, e + 70, "  " + f[dd], 4282676992, 4278190080, -1);
                p(a + 4 + 56, e + 84, "  " + f[ed], 4290805952, 4278190080, -1);
                p(a + 4 + 56, e + 98, "  " + f[fd], 4294942752, 4278190080, -1);
                p(a + 4 + 56, e + 112, "  " + f[gd], 4291598745, 4278190080, -1);
                p(a + 4 + 56, e + 126, "  " + f[hd], 4292927712, 4278190080, -1);
                p(a + 4 + 112, e + 0, "  " + f[id], 4294967072, 4278190080, -1);
                p(a + 4 + 112, e + 14, "  " + f[jd], 4282400832, 4278190080, -1);
                p(a + 4 + 112, e + 28, "  " + f[kd], 4284900864, 4278190080, -1);
                p(a + 4 + 112, e + 42, "  " + f[od], 4291559424, 4278190080, -1);
                p(a + 4 + 112, e + 56, "  " + f[pd], 4291624704, 4278190080, -1);
                p(a + 4 + 112, e + 70, "  " + f[qd], 4278237952, 4278190080, -1);
                p(a + 4 + 112, e + 84, "  " + f[rd], 4294967295, 4278190080, -1);
                p(a + 4 + 112, e + 98, "  " + f[sd], 4282400832, 4278190080, -1);
                p(a + 4 + 112, e + 112, "  " + f[vd], 4286607440, 4278190080, -1);
                p(a + 4 + 112, e + 126, "  " + f[yd], 4289374890, 4278190080, -1);
                p(a + 4 + 168, e + 0, "  " + f[zd], 4294954035, 4278190080, -1);
                p(a + 4 + 168, e + 14, "  " + f[Ad], 4282659618, 4278190080, -1);
                p(a + 4 + 168, e + 28, "  " + f[Bd], 4291611852, 4278190080, -1);
                p(a + 4 + 168, e + 42, "  " + f[Cd], 4278203187,
                    4278190080, -1);
                p(a + 4 + 224, e + 42, "  " + f[Qc], 4294959328, 4278190080, -1);
                p(a + 4 + 224, e + 56, "  " + Sd, 4289765520, 4278190080, -1);
                for (b = 0; 5 > b; b++) f[b] = 0;
                for (b = 0; b < Vd; b++) K[b] >= ae ? f[4]++ : K[b] >= $d ? f[2]++ : K[b] >= Yd ? f[1]++ : K[b] >= Xd && f[0]++;
                p(a + 4 + 224, e + 70, "  " + f[2], 4294098283, 4278190080, -1);
                p(a + 4 + 224, e + 84, "  " + f[0], 4294098283, 4278190080, -1);
                p(a + 4 + 224, e + 98, "   " + f[1], 4294098283, 4278190080, -1);
                for (b = 0; b < ce; b++) 0 != de[b] && f[3]++;
                p(a + 4 + 224, e + 112, "   " + f[3], 4294098283, 4278190080, -1);
                p(a + 4 + 224, e + 126, "  " + f[4], 4287655952, 4278190080, -1)
            }
            af && 0 == za && (Rb["0"] ? ha = 0 : Rb["1"] ? ha = 1 : Rb["2"] ? ha = 2 : Rb["3"] ? ha = 3 : Rb["4"] ? ha = 4 : Rb["5"] ? ha = 5 : Rb["6"] ? ha = 6 : Rb["7"] ? ha = 7 : Rb["8"] ? ha = 8 : Rb["9"] ? ha = 9 : Rb[32] ? Ba = Od(Ba + 1, 1) : Rb[10] || Rb[13] ? Ba = 1 : Rb.l && (Ib(), Jb(), ma = -10));
            if (mh(a - 8, e - 8, 391, 139) && ga && 0 == za) {
                c = k((c - (a - 8)) / 56);
                d = k((d - (e - 8)) / 14);
                b = Fe(10 * c + d, 0, 69);
                if (34 != b && 35 != b && 36 != b && 37 != b && 38 != b && 39 != b)
                    if (53 == b) Me && (53 == da && (sa = 1 - sa), da = b), Oe && (53 == ea && (sa = 1 - sa), ea = b);
                    else if (55 == b) Ha = Od(Ha + ih, 3);
                else if (56 == b) ha = Od(ha + ih, 9);
                else if (57 == b) Me ? (57 == da && 4 > pa ?
                    (pa++, qa += 400 >> pa >> 1, ra += 300 >> pa >> 1) : 57 == da && (pa = 0), da = b) : Oe && (57 == ea && 0 < pa ? (qa -= 400 >> pa >> 1, ra -= 300 >> pa >> 1, pa--) : 57 == ea && (pa = 4, qa += 200 - (400 >> pa >> 1), ra += 150 - (300 >> pa >> 1)), ea = b), qa = Fe(qa, 0, 400 - (400 >> pa)), ra = Fe(ra, 0, 300 - [300, 150, 75, 38, 19][pa]);
                else if (58 == b) Ca = Od(Ca + ih, 3);
                else if (59 == b) Ba = Od(Ba + ih, 1);
                else if (60 == b) 0 != ih && (za = 1);
                else if (61 == b) {
                    if (Me || Oe) Db(), Eb(), ma = 10
                } else if (62 == b) 0 != ih && (Ib(), Jb(), ma = -10);
                else if (63 == b) Oa = Od(Oa + ih, 1);
                else if (64 == b) Na = Od(Na + ih, 1);
                else if (65 == b) Ga = Od(Ga + ih, 1);
                else if (66 ==
                    b) Aa = Od(Aa + ih, 7);
                else if (67 == b) {
                    if (na = Od(na + ih, 13), 0 != ih)
                        for (b = 309 * g - 1; 0 <= b; b--) db[b] = 0, fb[b] = 0, gb[b] = 0
                } else 68 == b ? ia = Od(ia + ih, 2) : 69 == b ? 0 != ih && ic.e(0) : Me ? da = b : Oe && (ea = b);
                b = a + 0 + 56 * c;
                c = e - 1 + 14 * d;
                d = 56;
                f = 13;
                var h, r, q;
                d = b + d > g ? g : k(b + d);
                f = c + f > ca ? ca : k(c + f);
                b = 0 > b ? 0 : k(b);
                c = 0 > c ? 0 : k(c);
                r = c * g + b;
                for (q = g - (d - b); c < f; c++, r += q)
                    for (h = b; h < d; h++, r++) 4282400832 == l[r] >>> 0 && (l[r] = 4282384384)
            }
            ga && zg(8, 308, 408, 308, 4284874752);
            0 == sa ? p(a + 4 + 280 - 1, e + 42, "Copy", 4294918208, 0, -2) : p(a + 4 + 280 + 23, e + 42, "Paste", 4294918208, 0, -3);
            b = ["free",
                "line", "lock", "paint"
            ];
            p(a + 4 + 280, e + 70, "    " + b[Ha], 0, 4278190080, -2);
            p(a + 4 + 280, e + 70, "    " + b[Ha], 4294967295, 0, -2);
            p(a + 4 + 280 - 1, e + 84, "      " + ha, 4294967295, 4278190080, -1);
            p(a + 4 + 280, e + 98, "      " + ["x1", "x2", "x4", "x8", "16"][pa], 4294967295, 4278190080, -2);
            p(a + 4 + 280, e + 112, "       " + (1 << Ca), 4294967295, 4278190080, -2);
            0 == Ba ? p(a + 4 + 280 - 1, e + 126, "Start", 4294918208, 0, -3) : p(a + 4 + 280 + 25, e + 126, "Stop", 4294918208, 0, -2);
            0 < ma && (ma--, 1 < ma && m.a(a + 4 + 336, e + 14, "SAVE", 4294967295, 4294901760));
            0 > ma && (ma++, -1 > ma && m.a(a + 4 + 336, e + 28,
                "LOAD", 4294967295, 4294901760));
            1 == Oa && p(a + 4 + 336, e + 42, "MiniMap", 4294967295, 4294901760, -1);
            b = ["str", "num"];
            p(a + 4 + 336, e + 56, "     " + b[Na], 0, 4278190080, -2);
            p(a + 4 + 336, e + 56, "     " + b[Na], 4294967295, 0, -2);
            b = ["OFF", "LOOP"];
            p(a + 4 + 336 + 25, e + 70, b[Ga], 0, 4278190080, -2);
            p(a + 4 + 336 + 25, e + 70, b[Ga], 4294967295, 0, -2);
            m.a(a + 4 + 336, e + 84, "     " + Aa, 4286578688, 4278190080);
            b = "non air line blur shade aura light toon mesh gray track dark TG siluet".split(" ");
            p(a + 4 + 336, e + 98, "   " + b[na], 0, 4278190080, -2);
            p(a + 4 + 336, e + 98, "   " + b[na],
                4294967295, 0, -2);
            m.a(a + 4 + 336, e + 112, "    " + ["S", "M", "L"][ia], 4294967295, 4278190080);
            nc(a + 0 + 56 * k(da / 10), e + 1 + da % 10 * 14, 3, 4, 4294901760);
            nc(a + 0 + 56 * k(ea / 10), e + 6 + ea % 10 * 14, 3, 4, 4278190335);
            p(64, 451, " " + (Fc - 8), 0, 4278190080, -1);
            p(64, 451, "      " + (Gc - 8), 0, 4278190080, -1);
            p(141, 451, "   " + (ja[ia] - Nd), 0, 4278190080, -1);
            m.a(16, 451, nh + Tg, 0, 4278190080);
            1 == ba && m.a(64, 451, oh + "sl", 4294967295, 4278190080);
            if (1 == Oa)
                for (a = 15, e = 314, 116 > Ge && ga && (a = 127), nc(a - 3, e - 3, 106, 81, 4286611584), Db(), b = 0, a = g * e + a, d = 0; 300 > d; d += 4, a += g - 100)
                    for (c =
                        0; 400 > c; c += 4, a++) e = 400 * d + c, 0 == nb[e] && (e += 401), b = 11 == na ? nb[e] == D || nb[e] == Xc || nb[e] == fd || nb[e] == id || nb[e] == od || nb[e] == zd ? nb[e] : 0 : 13 == na ? 0 == nb[e] ? 0 : 1 : nb[e], l[a] = 9 == na ? mc[b] : 13 == na ? 0 == b ? 4294967295 : 4278190080 : lc[b][0]; - 1 == za && za++;
            1 == xb ? (rb ? ph(Ta, "\u30af\u30ea\u30c3\u30af\u3067\u518d\u751f\u3001\uff2c\uff2f\uff21\uff24\u3067\u518d\u30b9\u30bf\u30fc\u30c8") : ph(Ta, "Click to play, LOAD to restart."), xb = 0, za = 10) : 2 == xb && (rb ? ph(Ta, "\u30a8\u30e9\u30fc") : ph(Ta, "Error"), xb = 0, za = 10);
            1 == za && (pa = 0, 0 == wb && (a = Fb(47,
                115, 99, 111, 114, 101, 47, 100, 117, 115, 116, 46, 112, 104, 112, 63, 97, 61), a += pb, a += qh + (rb ? "0" : "1"), jc(a, ""), 1 == kc && "ok" == rh[0] ? wb = 1 : (wb = 2, yb = "err1" == rh[0] ? 1 : "err2" == rh[0] ? 2 : "err3" == rh[0] ? 3 : "err4" == rh[0] ? 4 : "err5" == rh[0] ? 5 : 0)), za++);
            if (2 == za) {
                if (1 == wb) {
                    if (50 > zb) {
                        za = 3;
                        rb ? ph(Ta, "\u3082\u3046\u5c11\u3057\u4f5c\u308a\u8fbc\u3093\u3067\u4e0b\u3055\u3044\u3002") : ph(Ta, "Please carefully created.");
                        break a
                    }
                    rb ? ph(Ta, "\u30bf\u30a4\u30c8\u30eb\u3092\u8a18\u5165\u3057\u3066\uff2f\uff2b\u3092\u62bc\u3057\u3066\u4e0b\u3055\u3044") :
                        ph(Ta, "Enter the title and click OK.");
                    Ua = ""
                } else 2 == wb && (rb ? 1 == yb ? ph(Ta, "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059") : 2 == yb ? ph(Ta, "1\u65e5\u306b1\u56de\u306e\u307f\u3067\u3059") : 3 == yb ? ph(Ta, "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30fc\u30bf") : 4 == yb ? ph(Ta, "\u904e\u53bb12\u6642\u9593\u306e\u4f5c\u54c1\u6570\u304c60\u4ef6\u306b\u9054\u3057\u305f\u70ba\uff71\uff6f\uff8c\uff9f\u51fa\u6765\u307e\u305b\u3093") : 5 == yb ? ph(Ta, "\u8a00\u8a9e\u30a8\u30e9\u30fc") : ph(Ta, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") :
                    1 == yb ? ph(Ta, "User registration is required.") : 2 == yb ? ph(Ta, "1 time in 2 days only.") : 3 == yb ? ph(Ta, "Download data.") : 4 == yb ? ph(Ta, "Reached 50 posts in 12 hours. Cannot upload.") : 5 == yb ? ph(Ta, "Language error.") : ph(Ta, "Cannot upload."));
                za++
            } else if (3 == za) {
                nc(48, 100, 320, 100, 4286611584);
                sh(208, 110, "UPLOAD", 4294942880);
                th(135);
                if (1 == wb && 50 <= zb && (nc(92, 150, 232, 16, 4294967295), Ag(91, 149, 234, 18, 4278190080), mh(84, 142, 232, 16) && (Ag(91, 149, 234, 18, 4294901760), Pe && (a = uh("Text", Ua), null != a && (Ua = a))), ph(kb, Ua), vh(kb,
                        93, 150, 230, 16, 230, 16, 4278190080), a = mh(150, 172, 16, 12), m.a(158, 180, "OK", a ? 4294901760 : 4294967295, 4278190080), a && Pe))
                    if (2 > Ua.length) rb ? ph(Ta, "\u30bf\u30a4\u30c8\u30eb\u3092\uff12\u6587\u5b57\u4ee5\u4e0a\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : ph(Ta, "The title must be longer than 2 characters.");
                    else {
                        a = Ua;
                        e = 0;
                        b = a.length;
                        for (c = 0; c < b; c++) d = a.charCodeAt(c), e = 0 <= d && 128 >= d || 65377 <= d && 65439 >= d ? e + 1 : e + 2;
                        20 < e ? rb ? ph(Ta, "\u30bf\u30a4\u30c8\u30eb\u3092\uff11\uff10\u6587\u5b57\u4ee5\u4e0b\u3067\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") :
                            ph(Ta, "The title must be shorter than 10 characters.") : za++
                    }
                a = mh(200, 172, 48, 12);
                m.a(208, 180, "CANCEL", a ? 4294901760 : 4294967295, 4278190080);
                a && Pe && (za = 5)
            } else if (4 == za) Ua = encodeURIComponent(Ua), 0 == Ua.length ? (za = 3, rb ? ph(Ta, "\u30a8\u30e9\u30fc") : ph(Ta, "Error")) : (Db(), Eb(), 605 == tb.length ? (za = 3, rb ? ph(Ta, "\u30a8\u30e9\u30fc") : ph(Ta, "Error")) : (a = Fb(47, 115, 99, 111, 114, 101, 47, 100, 117, 115, 116, 46, 112, 104, 112, 63, 97, 61), a += pb, a += qh + (rb ? "0" : "1"), a += wh + Ua, e = "d=" + tb, e += xh + ub, e += yh + vb, e += zh + Bb, jc(a, e), wb = 2, za++));
            else if (5 ==
                za) za = 0;
            else if (10 == za)
                if (nc(82, 308, 252, 70, 4284481536), nc(86, 312, 244, 62, 4284506208), sh(208, 322, "DOWNLOAD", 4294942880), th(343), 200 > Ge ? (sh(178, 365, "START", 4294901760), sh(238, 365, "STOP", 4294967295)) : (sh(178, 365, "START", 4294967295), sh(238, 365, "STOP", 4294901760)), Pe) za = 0, Ba = 200 > Ge ? 0 : 1;
                else {
                    if (Tb[37] || Tb[39]) za = 0, Ba = Tb[37] ? 0 : 1
                } else if (20 == za) Ua = "", za++;
            else if (21 == za) nc(88, 309, 240, 99, 4286611584), nc(92, 317, 232, 16, 4294967295), Ag(91, 316, 234, 18, 4278190080), mh(84, 309, 232, 16) && (Ag(91, 316, 234, 18, 4294901760), Pe &&
                    (a = uh("Text", Ua), null != a && (Ua = a))), m.a(93, 320, Ua.substr(0, 28), 4294967295, 4278190080), 3 == Ya && (nc(240, 340, 84, 16, 4294967295), Ag(239, 339, 86, 18, 4278190080), mh(232, 332, 84, 16) && (Ag(239, 339, 86, 18, 4294901760), Pe && (a = uh("setFont", Xa), null != a && (Xa = a))), m.a(241, 343, Xa.substr(0, 10), 4294967295, 4278190080)), b = -1, 80 <= Ge && 220 > Ge && 334 <= He && 382 > He && (b = k((He - 334) / 16), 0 == b && 0 != ih && (Ya = Od(Ya + ih, 3)), 1 == b && 0 != ih && (Za = Od(Za + ih, 3)), 2 == b && 0 != ih && ($a = Od($a + ih, 10))), m.a(92, 342, "font :" + ab[Ya], 0 == b ? 4294901760 : 4294967295, 4278190080),
                m.a(92, 358, "style:" + bb[Za], 1 == b ? 4294901760 : 4294967295, 4278190080), m.a(92, 374, "size :" + cb[$a], 2 == b ? 4294901760 : 4294967295, 4278190080), b = -1, 80 <= Ge && 320 > Ge && 382 <= He && 400 > He && (b = 200 > Ge ? 0 : 1, Pe && (0 == b ? za++ : za = 23)), m.a(158, 392, "OK", 0 == b ? 4294901760 : 4294967295, 4278190080), m.a(208, 392, "CANCEL", 1 == b ? 4294901760 : 4294967295, 4278190080), a = ab[Ya], 3 == Ya && (a = Xa), Ah(kb, Ua, a, Za, cb[$a]), a = Kc, 0 != Dd[da] ? a = Dd[da] : 0 != Dd[ea] && (a = Dd[ea]), a == sd && (a = Kc), vh(kb, lb, mb, kb.g, 128, kb.g, 128, lc[a][0]);
            else if (22 == za) {
                a = "sex gay fuck suck crap shit dick penis bitch ** \u30bb\u30c3\u30af\u30b9 \u30a8\u30c3\u30c1 \u3061\u3093\u3053 \u30c1\u30f3\u30b3 \u307e\u3093\u3053 \u30de\u30f3\u30b3 \u539f\u7206 \u539f\u5b50\u7206 \u6838 \u88ab\u7206 \u6b7b \u6bba \u7968 \u8a55 \u62cd\u624b \u4eba\u6c17 \u53c2\u52a0 \u30a2\u30f3\u30b1\u30fc\u30c8 \u524a\u9664 \u6d88\u53bb ttp www. .com .jp".split(" ");
                e = "";
                for (b = 0; b < Ua.length; b++) c = Ua[b], " " != c && "\u3000" != c && (e += c);
                e = e.toLowerCase();
                for (b = 0; b < a.length && !(0 <= e.indexOf(a[b])); b++);
                if (b != a.length) za = 23;
                else {
                    a = ab[Ya];
                    3 == Ya && (a = Xa);
                    Ah(kb, Ua, a, Za, cb[$a]);
                    a = Kc;
                    0 != Dd[da] ? a = Dd[da] : 0 != Dd[ea] && (a = Dd[ea]);
                    a == sd && (a = Kc);
                    for (d = 0; 128 > d && !(308 <= mb + d); d++)
                        for (c = 0; 400 > c && !(408 <= lb + c); c++) 0 != kb.b[d * kb.c + c] && O[(mb + d) * g + (lb + c)] == Ld && (e = je(lb + c, mb + d, a), 0 <= e && a == Oc && (I[e].x = 0.1 * Jc.x, I[e].y = 0.1 * Jc.y, O[(mb + d) * g + (lb + c)] = E));
                    za++
                }
            } else 23 == za && (za = 0)
        }
    b = 11 == $g ? g * ca : 0;
    if (0 ==
        pa) e = a = 0;
    else {
        c = k(qa) + 8;
        d = k(ra) + 8;
        for (h = 0; 300 > h; h++)
            for (e = 4 * ((h + 8) * g + 8), a = (d + (h >> pa)) * g + (c + 0), f = 0; 400 > f; f++) r = a + (f >> pa), $b[e++] = l[r] >> 16 & 255, $b[e++] = l[r] >> 8 & 255, $b[e++] = l[r] & 255, e++;
        a = 308 * g;
        e = 4 * a
    }
    for (; a < b; a++) $b[e++] = l[a] >> 16 & 255, $b[e++] = l[a] >> 8 & 255, $b[e++] = l[a] & 255, e++;
    Rg(Og, -8, -8, 8, 8, g - 16, ca - 8);
    gc(qc, hc())
}
var lh = 1;

function dc() {
    if (Qg.length != fh.length) return !0;
    for (lh = 0; $g < Qg.length; $g++)
        if (Qg[$g] != fh[$g]) return !0;
    return !1
}
var Bh = 0,
    nh = 0,
    Eh = 0,
    oh = 0,
    Fh = 20,
    Gh = Date.now(),
    Hh = Gh,
    Jh = Gh + Fh,
    Kh = Gh,
    Lh = 0;

function hc() {
    Gh = Date.now();
    var a = Fe(Jh - Gh, 5, Fh);
    Bh++;
    Lh++;
    Eh += a;
    Jh += Fh;
    if (Gh + a >= Kh || Gh < Hh) oh = oh + Eh >> 1, Eh = 0, nh = Bh, Bh = 0, Jh = Gh + Fh, Kh = Gh + 1E3;
    Hh = Gh;
    return a
}
var fc = 0;

function Pa() {
    this.d = 0;
    this.file = "";
    this.q = this.f = this.n = this.g = this.k = this.b = this.shift = this.i = this.c = 0
}

function oc(a, b, c) {
    a.c = b;
    a.i = c;
    for (b = a.shift = 0; 16 > b; b++) 1 << b == a.c && (a.shift = b);
    a.b = new Uint32Array(a.c * a.i)
}
Pa.prototype.e = function(a) {
    this.file != a && (fc++, this.file = a, this.d = new Image, this.d.src = Sg + a + "?9.2", delete this.b, this.k = this.b = 0)
};

function ec(a) {
    if (0 == a.k && a.d.complete) {
        fc--;
        var b = a.d.width,
            c = a.d.height;
        if (0 == b || 0 == c) throw delete a.d, a.file = "", Nh;
        var d = Lg.createElement(Wg);
        d.width = b;
        d.height = c;
        d = d.getContext(Xg);
        d.drawImage(a.d, 0, 0);
        d = d.getImageData(0, 0, b, c).data;
        oc(a, b, c);
        b = 0;
        for (c = d.length; b < c; b += 4) a.b[b >> 2] = (d[b + 3] << 24 | d[b + 0] << 16 | d[b + 1] << 8 | d[b + 2]) >>> 0;
        delete a.d;
        a.k = 1
    }
}

function ph(a, b) {
    Ah(a, b, "sans-serif", 0, 14)
}

function Ah(a, b, c, d, e) {
    0 == a.k && (a.k = 1, oc(a, g, 128), a.n = Lg.createElement(Wg), a.n.width = a.c, a.n.height = a.i, a.f = a.n.getContext(Xg));
    var f = b + c + d + e;
    if (a.q != f) {
        a.q = f;
        a.f.fillStyle = "#000000";
        a.f.fillRect(0, 0, a.c, a.i);
        f = "";
        0 != (d & 2) && (f += "italic ");
        0 != (d & 1) && (f += "bold ");
        f = f + (e + "px ") + c;
        a.f.font = f;
        a.f.fillStyle = "#ffffff";
        a.f.fillText(b, 0, e);
        c = a.f.getImageData(0, 0, a.c, a.i).data;
        b = 0;
        for (d = c.length; b < d; b += 4) a.b[b >> 2] = 1 <= c[b + 0] ? 4294967295 : 0;
        for (b = c = a.g = 0; c < a.i; c++)
            for (d = 0; d < a.c; d++, b++) 4294967295 == a.b[b] && a.g <=
                d && (a.g = d + 1)
    }
}
var Oh = [
        [0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    Ph = [
        [0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0
        ],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
    ],
    m = new Qh;

function Qh() {
    this.o = new Pa;
    this.j = this.m = this.p = this.h = 0
}
Qh.prototype.e = function(a, b, c) {
    this.o.e(a);
    this.h = b;
    this.p = c;
    this.j = this.m = 0
};
Qh.prototype.a = function(a, b, c, d, e) {
    var f, h, r, q, w, z, A, P = g - this.h,
        x = this.o.c - this.h,
        Ea = d ? 4294967295 : 1,
        Qa = e ? 4278190080 : 1,
        Wa = c.length;
    for (f = 0; f < Wa; f++, a += this.h + this.m)
        if (w = c.charCodeAt(f) - 32, 0 != w) {
            96 <= w && (w = 31);
            0 != this.j && (a -= Oh[this.j - 1][w]);
            z = w * this.h;
            q = b * g + a;
            for (r = 0; r < this.p; r++, q += P, z += x)
                for (h = 0; h < this.h; h++, q++, z++) A = this.o.b[z], A == Ea ? l[q] = d : A == Qa && (l[q] = e);
            0 != this.j && (a -= Ph[this.j - 1][w])
        }
    this.j = 0
};

function sh(a, b, c, d) {
    var e = m;
    a -= c.length * (e.h + e.m) >> 1;
    b -= e.p >> 1;
    e.a(a, b, c, d, 4278190080)
}

function p(a, b, c, d, e, f) {
    var h = m;
    h.m = f;
    h.a(a, b, c, d, e);
    h.m = 0
}
var Rh = 0;

function Sh(a, b, c) {
    var d = Rh,
        e = 0,
        f = 0,
        h = 0;
    1 == d ? (d = a >> 16 & 255, e = (((b >> 16 & 255) - d) * c >> 8) + d, d = a >> 8 & 255, f = (((b >> 8 & 255) - d) * c >> 8) + d, d = a & 255, h = (((b & 255) - d) * c >> 8) + d) : 2 == d ? (e = ((b >> 16 & 255) * c >> 8) + (a >> 16 & 255), 255 < e && (e = 255), f = ((b >> 8 & 255) * c >> 8) + (a >> 8 & 255), 255 < f && (f = 255), h = ((b & 255) * c >> 8) + (a & 255), 255 < h && (h = 255)) : 3 == d ? (e = (a >> 16 & 255) - ((b >> 16 & 255) * c >> 8), 0 > e && (e = 0), f = (a >> 8 & 255) - ((b >> 8 & 255) * c >> 8), 0 > f && (f = 0), h = (a & 255) - ((b & 255) * c >> 8), 0 > h && (h = 0)) : 4 == d ? (e = (b >> 16 & 255) * (a >> 16 & 255) >> 8, f = (b >> 8 & 255) * (a >> 8 & 255) >> 8, h = (b & 255) * (a & 255) >>
        8) : 5 == d ? (d = a >> 16 & 255, e = d + ((b >> 16 & 255) * d * c >> 16), 255 < e && (e = 255), d = a >> 8 & 255, f = d + ((b >> 8 & 255) * d * c >> 16), 255 < f && (f = 255), d = a & 255, h = d + ((b & 255) * d * c >> 16), 255 < h && (h = 255)) : 6 == d && (d = a >> 16 & 255, e = d + (c - (2 * d * c >> 8)), d = a >> 8 & 255, f = d + (c - (2 * d * c >> 8)), d = a & 255, h = d + (c - (2 * d * c >> 8)));
    return (4278190080 | e << 16 | f << 8 | h) >>> 0
}
var Th = 0;

function zg(a, b, c, d, e) {
    c -= a;
    d -= b;
    var f, h;
    We(c) >= We(d) ? (h = k(We(c)), 0 != h && (d = k(65536 * d / h)), c = 0 <= c ? 65536 : -65536) : (h = k(We(d)), 0 != h && (c = k(65536 * c / h)), d = 0 <= d ? 65536 : -65536);
    a = k(65536 * a) + 32768;
    for (b = k(65536 * b) + 32768; 0 <= h; h--, a += c, b += d) 0 > a || g <= a >> 16 || 0 > b || ca <= b >> 16 || (f = (b >> 16) * g + (a >> 16), l[f] = 0 == Rh ? e : Sh(l[f], e, e >> 24 & 255))
}

function Ag(a, b, c, d, e) {
    c--;
    d--;
    zg(a, b, a + c, b, e);
    zg(a, b + d, a + c, b + d, e);
    zg(a, b, a, b + d, e);
    zg(a + c, b, a + c, b + d, e)
}

function nc(a, b, c, d, e) {
    var f;
    c = a + c > g ? g : ~~(a + c);
    d = b + d > ca ? ca : ~~(b + d);
    a = 0 > a ? 0 : ~~a;
    b = (0 > b ? 0 : ~~b) * g + a;
    f = g - (c - a);
    c = b + c - a;
    d *= g;
    if (0 == Rh)
        for (; b < d; b += f, c += g)
            for (; b < c; b++) l[b] = e;
    else
        for (; b < d; b += f, c += g)
            for (; b < c; b++) l[b] = Sh(l[b], e, e >> 24 & 255)
}

function vh(a, b, c, d, e, f, h, r) {
    var q, w, z, A, P, x;
    if (0 != d && 0 != e) {
        f = k((f << 8) / d);
        h = k((h << 8) / e);
        w = q = 0;
        0 > b && (q += f * -b);
        0 > c && (w += h * -c);
        d = b + d > g ? g : k(b + d);
        e = c + e > ca ? ca : k(c + e);
        b = 0 > b ? 0 : k(b);
        c = 0 > c ? 0 : k(c);
        var Ea = r >> 24 & 255,
            Qa = r >> 16 & 255,
            Wa = r >> 8 & 255,
            La = r & 255,
            Sa, fa;
        if (0 == Th)
            for (; c < e; c++, w += h)
                for (A = c * g + b, P = ((w >> 8) * a.c << 8) + q, z = b; z < d; z++, A++, P += f) x = a.b[P >> 8], 0 != x && (r = Qa * (x >> 16 & 255) >> 8, Sa = Wa * (x >> 8 & 255) >> 8, fa = La * (x & 255) >> 8, 0 == Rh ? l[A] = 4278190080 | r << 16 | Sa << 8 | fa : 1 == Rh ? (x = l[A] >> 16 & 255, r = ((r - x) * Ea >> 8) + x, x = l[A] >> 8 & 255, Sa = ((Sa - x) *
                    Ea >> 8) + x, x = l[A] & 255, fa = ((fa - x) * Ea >> 8) + x, l[A] = 4278190080 | r << 16 | Sa << 8 | fa) : 2 == Rh ? (r = (r * Ea >> 8) + (l[A] >> 16 & 255), 255 < r && (r = 255), Sa = (Sa * Ea >> 8) + (l[A] >> 8 & 255), 255 < Sa && (Sa = 255), fa = (fa * Ea >> 8) + (l[A] & 255), 255 < fa && (fa = 255), l[A] = 4278190080 | r << 16 | Sa << 8 | fa) : 5 == Rh && (x = l[A] >> 16 & 255, r = x + (r * x * Ea >> 16), 255 < r && (r = 255), x = l[A] >> 8 & 255, Sa = x + (Sa * x * Ea >> 16), 255 < Sa && (Sa = 255), x = l[A] & 255, fa = x + (fa * x * Ea >> 16), 255 < fa && (fa = 255), l[A] = 4278190080 | r << 16 | Sa << 8 | fa));
        else if (1 == Th)
            for (; c < e; c++, w += h)
                for (A = c * g + b, P = ((w >> 8) * a.c << 8) + q, z = b; z < d; z++,
                    A++, P += f) x = Ea * (a.b[P >> 8] & 255) >> 8, 0 != x && (l[A] = Sh(l[A], r, x));
        else if (2 == Th)
            for (; c < e; c++, w += h)
                for (A = c * g + b, P = ((w >> 8) * a.c << 8) + q, z = b; z < d; z++, A++, P += f) x = a.b[P >> 8], 4278190080 != x && (r = x >> 16 & 255, Sa = x >> 8 & 255, fa = x & 255, l[A] = r == Sa && Sa == fa ? 4278190080 | Qa * r >> 8 << 16 | Wa * Sa >> 8 << 8 | La * fa >> 8 : 4278190080 | r << 16 | Sa << 8 | fa)
    }
}

function th(a) {
    var b = Ta.g;
    vh(Ta, 208 - (b >> 1), a - 8, b, 16, Ta.g, 16, 4278190080)
}
var Ye = new Bc,
    Me = !1,
    Pe = !1,
    Ue = !1,
    gh = !1,
    Oe = !1,
    Se = !1,
    Ve = !1,
    hh = !1,
    af = !1,
    ih = 0,
    Ge = 0,
    He = 0,
    xg = 0,
    yg = 0,
    jh = 0,
    kh = 0;

function mh(a, b, c, d) {
    return Ge < a || a + c <= Ge || He < b || b + d <= He ? !1 : !0
}

function Uh(a) {
    var b = Ob.getBoundingClientRect();
    jh = k(a.clientX - b.left);
    kh = k(a.clientY - b.top)
}
Lg.onmousemove = Uh;
Lg.onmousedown = function(a) {
    Uh(a);
    Vh = !1;
    if (!(0 > jh || g <= jh || 0 > kh || ca <= kh) && (Vh = !0, 0 == a.button && (gh = !0), 2 == a.button && (hh = !0), Vh)) return !1
};
Lg.onmouseup = function(a) {
    Uh(a);
    0 == a.button && (gh = !1);
    2 == a.button && (hh = !1)
};
Lg.oncontextmenu = function() {
    if (Vh) return !1
};

function Wh(a) {
    for (var b = 0, c = 0, d = Ob; null !== d; d = d.offsetParent) b += d.offsetLeft, c += d.offsetTop;
    a = a.touches;
    jh = k(a[0].pageX - b);
    kh = k(a[0].pageY - c)
}
Lg.ontouchstart = function(a) {
    Wh(a);
    Vh = hh = gh = !1;
    if (!(0 > jh || g <= jh || 0 > kh || ca <= kh)) return gh = Vh = !0, 1 < a.touches.length && (hh = !0), !1
};
Lg.ontouchmove = function(a) {
    Wh(a);
    if (Vh) return !1
};
Lg.ontouchend = function(a) {
    1 > a.touches.length && (gh = !1);
    hh = !1;
    if (Vh) return !1
};
Lg.ontouchcancel = function() {
    hh = gh = Vh = !1
};
var Rb = Array(256),
    Sb = Array(256),
    Tb = Array(256),
    Ub = Array(256),
    Vb = Array(256);
Lg.onkeydown = function(a) {
    var b = a.keyCode;
    65 <= b & 90 >= b ? a.shiftKey || (b += 32) : b = a.shiftKey ? Vb[b] : Ub[b];
    0 <= b && 256 > b && (Tb[b] = !0, Sb[b] = !0);
    if (0 != b && Vh) return !1
};
Lg.onkeyup = function(a) {
    var b = a.keyCode;
    65 <= b & 90 >= b ? a.shiftKey || (b += 32) : b = a.shiftKey ? Vb[b] : Ub[b];
    0 <= b && 256 > b && (Tb[b] = !1);
    if (0 != b && Vh) return !1
};
var Vh = !1;

function uh(a, b) {
    var c = null;
    try {
        c = prompt(a, b)
    } catch (d) {}
    return c
}
var rh = Array(100),
    kc = 0,
    Xh = Fb(80, 79, 83, 84),
    qh = Fb(38, 98, 61),
    wh = Fb(38, 99, 61);
Fb(38, 100, 61);
var xh = Fb(38, 101, 61),
    yh = Fb(38, 102, 61),
    zh = Fb(38, 103, 61);
Fb(38, 104, 61);
Fb(38, 105, 61);
Fb(38, 106, 61);
Fb(38, 107, 61);
Fb(111, 107);
var Nh = Fb(69, 82, 82, 79, 82),
    Yh = Fb(61),
    Zh = Fb(10),
    $h = Fb(67, 111, 110, 116, 101, 110, 116, 45, 84, 121, 112, 101),
    ai = Fb(97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 120, 45, 119, 119, 119, 45, 102, 111, 114, 109, 45, 117, 114, 108, 101, 110, 99, 111, 100, 101, 100);

function jc(a, b) {
    for (var c = kc = 0; 100 > c; c++) rh[c] = "";
    try {
        var d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            if (4 == d.readyState)
                if (200 == d.status) {
                    var a, b, c = 0,
                        e = d.responseText.length;
                    for (a = 0; a < e; a++)
                        if (b = d.responseText[a], b == Yh) {
                            for (a += 1; a < e; a++) {
                                b = d.responseText[a];
                                if (b == Zh) break;
                                rh[c] += b
                            }
                            c++
                        } else
                            for (; a < e && d.responseText[a] != Zh; a++);
                    kc = 1
                } else kc = -1
        };
        d.open(Xh, a, !1);
        d.setRequestHeader($h, ai);
        d.send(b);
        return d.responseText
    } catch (e) {
        kc = -2
    }
    return ""
}

function Bc() {
    this.y = this.x = 0
}
Bc.prototype.set = function(a) {
    this.x = a.x;
    this.y = a.y;
    return this
};

function le(a, b, c) {
    a.x = b;
    a.y = c
}
Bc.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
Bc.prototype.sub = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};

function Xe(a, b, c) {
    a.x = b.x - c.x;
    a.y = b.y - c.y
}

function vf(a, b) {
    a.x *= b;
    a.y *= b
}

function bf(a, b, c) {
    a.x = b.x * c;
    a.y = b.y * c
}

function df(a) {
    return bi(a.x, a.y)
}

function gg(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}

function Ze(a) {
    var b = bi(a.x, a.y);
    if (0 == b) return 0;
    a.x /= b;
    a.y /= b;
    return b
}

function lg(a) {
    var b = gg(a);
    0 != b && (a.x /= b, a.y /= b)
}

function Pd(a) {
    var b = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y));
    0 < a.y && (b = Qd - b);
    return b
}

function bi(a, b) {
    0 > a && (a = -a);
    0 > b && (b = -b);
    return a >= b ? 0.9604 * a + 0.3978 * b : 0.9604 * b + 0.3978 * a
}
var Wb = new Float32Array(1024),
    Xb = 0,
    Zb = 0;

function W(a) {
    Xb += Zb;
    Xb &= 1023;
    return Wb[Xb] * a
}

function Y(a, b) {
    Xb += Zb;
    Xb &= 1023;
    return Wb[Xb] * (b - a) + a
}

function $(a) {
    Xb += Zb;
    Xb &= 1023;
    return ~~(Wb[Xb] * a)
}
var Pb = Array(513),
    Qb = 3.1415927,
    Qd = 6.2831855;

function We(a) {
    return 0 > a ? -a : a
}

function ug(a, b) {
    return a > b ? a : b
}

function vg(a, b) {
    return a < b ? a : b
}

function Fe(a, b, c) {
    return a < b ? b : a > c ? c : a
}

function Od(a, b) {
    return 0 > a ? b : a > b ? 0 : a
}

function k(a) {
    return Math.floor(a)
};