#!/usr/bin/perl

local $/;

sub slurp {
    my $fn = shift;
    open my $fh, "<", $fn or die "$fn: $!";
    return scalar <$fh>;
}

my $data = <>;

$data =~ s{<script type="text/javascript" src="(.+?)"></script>}
          { qq[<script type="text/javascript">] . slurp($1) . qq[</script>] }ge;

$data =~ s{<link rel="stylesheet" href="(.+?)">}
          { qq[<style type="text/css">] . slurp($1) . qq[</style>] }ge;

print $data;
